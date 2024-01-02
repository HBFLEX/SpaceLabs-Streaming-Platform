import getFollowing from "@/lib/getFollowing"
import { FollowedUsersList } from "./FollowedUsersList"


const FollowingUsers = async () => {
    const following = await getFollowing()

    return (
        <div className="mt-5">
            <FollowedUsersList data={following} />
        </div>
    )
}

export default FollowingUsers