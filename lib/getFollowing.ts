import { getSelf } from "./auth-service";
import { db } from "./db";


const getFollowing = async () => {

    const self = await getSelf()

    if(!self) throw new Error('Unauthorized to perform requested action')

    const following = await db.follow.findMany({
        where: { followerId: self.id },
        include: { following: true }
    })

    if(!following) return []

    return following
}

export default getFollowing