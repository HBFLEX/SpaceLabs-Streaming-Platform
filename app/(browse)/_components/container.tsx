'use client'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/use-sidebar'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'


interface ContainerProps{
    children: React.ReactNode
}

const container = ({children}: ContainerProps) => {

    const { collapsed, onExpand, onCollapse } = useSidebarStore((state) => state)

    const isOnMobileDevice = useMediaQuery('(max-width:1024px)')

    useEffect(() => {
        if(isOnMobileDevice) onCollapse()
        else onExpand()
    }, [isOnMobileDevice, onExpand, onCollapse])

    return (
        <div className={cn(
            collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60'
        )}>
            {children}
        </div>
    )
}

export default container