import { currentUser } from "@clerk/nextjs"
import {db} from '@/lib/db'


const getSelf = async() => {
    const self = await currentUser()

    if(!self) throw new Error('User not found')

    const user = db.user.findUnique({
        where: {
            externalUserId: self.id
        }  
    })

    if(!user) throw new Error('No user found in db')

    return user

}