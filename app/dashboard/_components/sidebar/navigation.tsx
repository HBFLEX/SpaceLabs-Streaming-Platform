'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import {
    Fullscreen,
    KeyRound,
    MessageSquare,
    Users
} from 'lucide-react'
import { NavItem, NavItemSkeleton } from './nav-item'

const Navigation = () => {

    const user = useUser()
    const pathName = usePathname()

    const routes = [
        {
            label: 'Stream',
            href: `/dashboard/${user?.user?.username}`,
            icon: Fullscreen
        },
        {
            label: 'Keys',
            href: `/dashboard/${user?.user?.username}/keys`,
            icon: KeyRound
        },
        {
            label: 'Chat',
            href: `/dashboard/${user?.user?.username}/chat`,
            icon: MessageSquare
        },
        {
            label: 'Community',
            href: `/dashboard/${user?.user?.username}/community`,
            icon: Users
        }
    ]

    if(!user.user?.username){
        return (
            <ul className='flex flex-col mt-2'>
                {[...Array(4)].map((_, i) => (
                    <NavItemSkeleton key={i} />
                ))}
            </ul>
        )
    }

    return (
        <ul className='space-y-2 px-2 pt-2 lg:pt-0'>
            {routes.map((route) => (
                <NavItem 
                    key={route.label}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                    isActive={pathName === route.href}
                />
            ))}
        </ul>
    )
}

export default Navigation