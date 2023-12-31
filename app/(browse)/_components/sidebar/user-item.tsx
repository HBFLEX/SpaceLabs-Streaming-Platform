import React from 'react'
import { usePathname } from 'next/navigation' 
import { Button } from '@/components/ui/button'
import { useSidebarStore } from '@/store/use-sidebar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { UserAvatar } from '@/components/user-avatar'
import LiveBadge from '@/components/live-badge'
import { Skeleton } from '@/components/ui/skeleton'


interface UserItemProps{
    username: string
    imageUrl: string
    isLive?: boolean
}

export const UserItem = ({
    username,
    imageUrl,
    isLive
}: UserItemProps) => {

  const pathName = usePathname()
  const href = `/u/${username}`
  const isActive = pathName === href

  const { collapsed } = useSidebarStore((state) => state)

  return (
      <Button 
        variant='ghost' 
        asChild 
        className={cn('w-full h-12 p-1 hover:bg-gray-700/80', collapsed ? 'justify-center' : 'justify-start', isActive && 'bg-gray-700/80')}>
        <Link href={href}>
          <div className={cn('flex items-center mt-4 mb-3 w-full gap-x-4', collapsed && 'justify-center', isLive && !collapsed && 'justify-between')}>
            <UserAvatar 
              imageUrl={imageUrl}
              username={username}
              isLive={isLive}
              size='default'
              showBadge
            />
            {!collapsed && 
              <p className='truncate w-24 uppercase text-white text-semibold text-md'>{username}</p>
            }
            {isLive && !collapsed && <LiveBadge />}
          </div>
        </Link>
      </Button>
  )
}

export const UserItemSkeleton = () => {
  return (
    <li className='flex gap-x-4 py-2 px-2'>
      <Skeleton className='w-[32px] h-[32px] rounded-md' />
      <Skeleton className='w-[32px] h-[32px] rounded-md' />
    </li>
  )
}