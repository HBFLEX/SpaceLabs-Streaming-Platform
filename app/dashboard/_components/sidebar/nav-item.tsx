import { Button } from '@/components/ui/button'
import { useCreatorSidebarStore } from '@/store/use-creator-sidebar'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import Hint from '@/components/Hint'


interface NavItemProps{
    label: string
    href: string
    icon: LucideIcon
    isActive: boolean
}

export const NavItem = ({
    label,
    href,
    icon: Icon,
    isActive
}: NavItemProps) => {

    const { collapsed } = useCreatorSidebarStore((state) => state)

    return (
        <Button variant='ghost' className={cn('w-full h-12 hover:bg-gray-700', collapsed ? 'justify-center' : 'justify-start', isActive && 'bg-gray-700')} asChild>
            <Link href={href}>
                <div className='flex items-center gap-x-4'>
                    <Icon className={cn('h-4 w-4', collapsed ? 'mr-0' : 'mr-2')} />
                    {!collapsed && (
                        <span>{label}</span>
                    )}
                </div>
            </Link>
        </Button>
    )
}

export const NavItemSkeleton = () => {

    return (
        <li className='flex item-center gap-x-4 mb-4 px-4'>
            <Skeleton className='w-[30px] h-[30px] rounded-md' />
            <Skeleton className='hidden lg:flex flex-1 w-[160px] h-[30px]' />
        </li>
    )
}