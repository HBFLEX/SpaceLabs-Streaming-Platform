'use client'
import { User } from '@prisma/client'
import { useSidebarStore } from '@/store/use-sidebar'

import React from 'react'
import { UserItem, UserItemSkeleton } from './user-item'

interface RecommendedUsersListProps{
    data: any
}

export const RecommendedUsersList = ({data}:RecommendedUsersListProps) => {
  
    const { collapsed } = useSidebarStore((state) => state)
    const showRecommendedLbl = !collapsed && data.length > 0

    return (
        <div>
            {
                showRecommendedLbl && (
                    <div className='text-center mt-3 mb-4'>
                        <p className='text-sm text-muted-foreground '>
                            Recommended
                        </p>
                    </div>
                )
            }

            {
                data.map((user: User) => (
                    <UserItem 
                        username={user.username}
                        imageUrl={user.imageUrl}
                        isLive={true}
                    />
                ))
            }
        </div>
  )
}

export const RecommendedUsersListSkeleton = () => {
    return (
        <ul className='px-2'>
            {[...Array(5).map((_, i) => (
                <UserItemSkeleton key={i} />
            ))]}
        </ul>
    )
}