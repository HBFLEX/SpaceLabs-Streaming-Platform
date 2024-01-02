import { db } from "./db"
import { getSelf } from './auth-service'

const getRecommended = async() => {

    let user = null;
    let users = null;

    try{
        user = await getSelf()
    }catch(e){
        user = null
    }
    
    if(user){
        users = db.user.findMany({
            orderBy: { createdAt: 'desc' },
            where: { 
                AND: [
                    {
                        NOT: { id: user.id }
                    },
                    {
                        NOT: {
                            followedBy: {
                                some: {
                                    followerId: user.id
                                }
                            }
                        }
                    }
                ]
            }
        })
    }else{
        users = db.user.findMany({
            orderBy: { createdAt: 'desc' }
        })
    }

    if(!users) return { users: [] }
    
    return users
}

export default getRecommended