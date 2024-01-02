import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Actions from './_components/actions'

interface UserProfilePageProps{
    params: { username: string }
}

const UserProfilePage = async ({
    params
}: UserProfilePageProps) => {

    const user = await getUserByUsername(params.username)

    if(!user) notFound()

    const isFollowing = await isFollowingUser(user.id)

    return (
    <div className='flex text-white flex-col gap-y-4'>
        <p>username: {user?.username}</p>
        <p>user id: {user?.id}</p>
        <p>isFollowing: {`${isFollowing}`}</p>
        <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
    )
}

export default UserProfilePage