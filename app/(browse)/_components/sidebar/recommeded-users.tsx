import getRecommended from '@/lib/getRecommended'
import React from 'react'
import { RecommendedUsersList } from './RecommendedUsersList'

const Recommended = async () => {

    const recommendedUsers = await getRecommended()
    return (
        <div>
            <RecommendedUsersList data={recommendedUsers} />
        </div>
    )
}

export default Recommended