'use server'


import { Stream } from "@prisma/client";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";


const updateStream = async (values: Partial<Stream>) => {
    try{
        const self = await getSelf()
        if(!self) throw new Error('Forbidden')

        const selfStream = await getStreamByUserId(self.id)
        if(!selfStream) throw new Error('No stream data found')

        const data = {
            name: values.name,
            isChatEnabled: values.isChatEnabled,
            isChatDelayed: values.isChatDelayed,
            isChatFollowersOnly: values.isChatFollowersOnly,
        }

        const stream = await db.stream.update({
            where: { id: selfStream.id },
            data: {...data}
        })

        revalidatePath(`/dashboard/${self.username}`)
        revalidatePath(`/dashboard/${self.username}/chat`)
        revalidatePath(`/u/${self.username}`)

        return stream
    }catch(err){
        throw new Error(`Internal Server Error -> ${err}`)
    }
    
}

export { updateStream }