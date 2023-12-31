import { db } from "./db"


const getRecommended = async() => {

    await new Promise(resolve => setTimeout(resolve, 5000))

    const users = db.user.findMany({
        orderBy: { createdAt: 'desc' }
    })

    if(!users) return { users: [] }
    
    return users
}

export default getRecommended