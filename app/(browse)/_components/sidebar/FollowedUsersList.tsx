'use client'

import { useSidebarStore } from '@/store/use-sidebar'
import { Follow, Stream, User } from '@prisma/client'
import React from 'react'
import { UserItem, UserItemSkeleton } from './user-item'

interface FollowedUsersListProps{
    data: (Follow & { following: User & { stream: Stream | null } })[]
}


export const FollowedUsersList = ({
    data
}: FollowedUsersListProps) => {

    const { collapsed } = useSidebarStore((state) => state)

    const showFollowingLbl = !collapsed && data.length > 0

    return (
    <div>
        {
            showFollowingLbl 
            && 
            <p className='text-muted-foreground text-semibold text-sm ml-3 mb-3'>
                Following
            </p>
        }

        {
            data.map((follow) => (
                <UserItem 
                    username={follow.following.username}
                    imageUrl={follow.following.imageUrl}
                    isLive={follow.following.stream?.isLive}
                />
            ))
        }
    </div>
    )
}

