import { db } from "./db";
import { getSelf } from './auth-service'


export const isFollowingUser = async (id: string) => {
    try{
        const self = await getSelf()

        if(!self) throw new Error('Unathorized to perform requested action')

        const otherUser = await db.user.findUnique({
            where: { id }
        })

        if(!otherUser) throw new Error('No user found')
        if(otherUser.id === self.id) return true
        
        const existingFollow = await db.follow.findFirst({
            where: { 
                followerId: self.id,
                followingId: otherUser.id
             }
        })

        return !!existingFollow

    }catch(e){
        return false
    }
}


export const followUser = async (id: string) => {
    const self = await getSelf()

    if(!self) throw new Error('Unauthorized to perform requested action')

    const otherUser = await db.user.findUnique({
        where: { id }
    })

    if(!otherUser) throw new Error('No user found')
    if(otherUser.id === self?.id) throw new Error('Cannot follow yourself')

    const existingFollowing = await db.follow.findFirst({
        where: {
            followerId: self.id,
            followingId: otherUser.id
        }
    })

    if(!!existingFollowing) throw new Error('Already following')

    const follow = await db.follow.create({
        data: {
            followerId: self.id,
            followingId: otherUser.id
        },
        include: {
            follower: true,
            following: true
        }
    })

    return follow
}

export const unfollowUser = async (id: string) => {
    const self = await getSelf()

    if(!self) throw new Error('Unauthorized to perform requested action')

    const otherUser = await db.user.findUnique({
        where: { id }
    })

    if(!otherUser) throw new Error('No user found')

    if(otherUser.id === self.id) throw new Error('Cannot unfollow yourself')

    const isFollowing = await db.follow.findFirst({
        where: {
            followerId: self.id,
            followingId: otherUser.id
        }
    })

    if(!isFollowing) throw new Error('Follow user first to unfollow')

    const unfollowUser = await db.follow.delete({
        where: {
           id: isFollowing.id
        },
        include: {
            follower: true,
            following: true
        }
    })

    return unfollowUser
}