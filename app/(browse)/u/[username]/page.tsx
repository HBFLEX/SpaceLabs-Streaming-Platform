import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Actions from './_components/actions'
import { isBlockedByUser } from '@/lib/block-service'

interface UserProfilePageProps{
    params: { username: string }
}

const UserProfilePage = async ({
    params
}: UserProfilePageProps) => {

    const user = await getUserByUsername(params.username)

    if(!user) return notFound()

    const isFollowing = await isFollowingUser(user.id)
    const isBlocking = await isBlockedByUser(user.id)

    if(isBlocking) return notFound()

    return (
    <div className='flex text-white flex-col gap-y-4'>
        <p>username: {user?.username}</p>
        <p>user id: {user?.id}</p>
        <p>isFollowing: {`${isFollowing}`}</p>
        <Actions username={user.username} userId={user.id} isFollowing={isFollowing} isBlocking={isBlocking} />
    </div>
    )
}

export default UserProfilePage