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
                    },
                    {
                        NOT: {
                            blocking: {
                                some: {
                                   blockedId: user.id 
                                }
                            }
                        }
                    }
                ]
            },
            include: {
                stream: true,
            },
        })
    }else{
        users = db.user.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                stream: true,
            },
        })
    }
    
    return users
}

export default getRecommended