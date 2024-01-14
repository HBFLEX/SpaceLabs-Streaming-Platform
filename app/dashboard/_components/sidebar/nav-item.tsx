import { Button } from '@/components/ui/button'
import { useCreatorSidebarStore } from '@/store/use-creator-sidebar'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'


interface NavItemProps{
    label: string
    href: string
    icon: LucideIcon
    isActive: boolean
}

const NavItem = ({
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

export default NavItem