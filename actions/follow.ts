'use server'


import { revalidatePath } from "next/cache"
import { followUser, unfollowUser } from "@/lib/follow-service"


export const onFollow = async (id: string) => {
    try{
        const followedUser = await followUser(id)
        revalidatePath('/')

        if(followedUser) revalidatePath(`/u/${followedUser.following.username}`)
        
        return followedUser
    }catch(_){
        throw new Error('Failed to perform requested action.Internal server error.')
    }
}

export const onUnfollow = async (id: string) => {
    try{
        const unfollow = await unfollowUser(id)

        revalidatePath('/')

        if(unfollow) revalidatePath(`/u/${unfollow.following.username}`)

        return unfollow

    }catch(_){
        throw new Error('Failed to perform requested action.Internal server error.')
    }
}