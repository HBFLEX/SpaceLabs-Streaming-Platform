'use server'

import { blockOtherUser, unblockOtherUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache"



export const onBlocking = async (id: string) => {
    try{
        const blockedUser = await blockOtherUser(id)
        revalidatePath('/')

        if(blockedUser) revalidatePath(`/u/${blockedUser.blocked.username}`)

        return blockedUser
    }catch{
        throw new Error('Failed to perform requested action.Internal server error.')
    }
}


export const onUnblocking = async (id:string) => {
    try{
        const unblockedUser = await unblockOtherUser(id)
        revalidatePath('/')

        if(unblockedUser) revalidatePath(`/u/${unblockedUser.blocked.username}`)

        return unblockedUser
    }catch{
        throw new Error('Failed to perform requested action.Internal server error.')
    }
}




