import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Skeleton } from './ui/skeleton'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { cn } from '@/lib/utils'
import LiveBadge from './live-badge'


const avatarSizes = cva(
    '',
    {
        variants: {
            size: {
                default: 'h-8 w-8',
                lg: 'h-14 w-14'
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface UserAvatarProps extends VariantProps<typeof avatarSizes>{
    imageUrl: string
    username: String
    isLive?: boolean
    showBadge?: boolean
}

export const UserAvatar = ({
    imageUrl,
    username,
    isLive,
    showBadge,
    size
}: UserAvatarProps) => {

  const canShowBadge = isLive && showBadge  
  return (
    <div className='relative'>
        <Avatar
            className={cn(
                isLive && 'ring-2 ring-rose-400 border border-gray-800',
                avatarSizes({ size }) 
            )}
        >
            <AvatarImage src={imageUrl} className='object-cover' />
            <AvatarFallback>
                {username[0]}
                {username[username.length - 1]}
            </AvatarFallback>
        </Avatar>
    </div>
  )
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes>{}

export const UserAvatarSkeleton = ({
    size
}: UserAvatarSkeletonProps) => {
    return(
        <Skeleton className={cn('rounded-full', avatarSizes({ size }))} />
    )
}