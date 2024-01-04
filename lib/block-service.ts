import { db } from "./db";
import { getSelf } from "./auth-service";


export const isBlockedByUser = async (id: string) => {
    try{
        const self = await getSelf()

        if(!self) throw new Error('User not found')
        if(self.id === id) throw new Error('You cannot block yourself')

        const otherUser = await db.user.findUnique({ where: { id } })
        if(!otherUser) throw new Error('User not found')

        const isBlocking = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: otherUser.id,
                    blockedId: self.id
                }
            }
        })

        return !!isBlocking

    }catch{
        return false
    }
}


export const blockOtherUser = async(id: string) => {
    try{
        const self = await getSelf()

        if(!self) throw new Error('User not found')

        if(self.id === id) throw new Error('Cannot block yourself')

        const otherUser = await db.user.findUnique({ where: {id} })
        if(!otherUser) throw new Error('User not found')

        const isAlreadyBlocking = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: self.id,
                    blockedId: otherUser.id
                }
            },
        })

        if(isAlreadyBlocking) throw new Error('Already blocking user')

        const blockOtherUser = await db.block.create({
            data: {
                blockerId: self.id,
                blockedId: otherUser.id
            },
            include: { blocked: true }
        })

        return blockOtherUser

    }catch{
        throw new Error('User not found')
    }
}


 export const unblockOtherUser = async(id: string) => {
    try{
        const self = await getSelf()

        if(!self) throw new Error('User not found')
        if(self.id === id) throw new Error('Cannot block yourself')

        const otherUser = await db.user.findUnique({ where: {id} })
        if(!otherUser) throw new Error('User not found')

        const isAlreadyBlocking = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: self.id,
                    blockedId: otherUser.id
                }
            }
        })

        if(!isAlreadyBlocking) throw new Error('User is not blocked')

        const unblockUser = await db.block.delete({
            where: {
                id: isAlreadyBlocking.id
            },
            include: { blocked: true }
        })

        return unblockUser

    }catch{
        throw new Error('User not found')
    }
}