import { db } from "./db"
import { getSelf } from './auth-service'

const getRecommended = async() => {

    new Promise((resolve) => setTimeout(resolve, 5000));

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
                NOT: { id: user.id }
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