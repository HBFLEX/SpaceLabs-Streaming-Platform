'use client'

import React from 'react'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useMediaQuery } from 'usehooks-ts'

import { useCreatorSidebarStore } from '@/store/use-creator-sidebar'

const Container = ({ children }: {children: React.ReactNode}) => {

    const { collapsed, onExpand, onCollapse } = useCreatorSidebarStore((state) => state)
    const matches = useMediaQuery(`(max-width: 1024px)`)


    useEffect(() => {
        if(matches) onCollapse()
        else onExpand()
    }, [matches, onExpand, onCollapse])

    return (
        <div className={cn('flex-1', collapsed ? 'pl-[70px]' : 'pl-[70px] lg:pl-60')}>
            {children}
        </div>
    )
}

export default Container