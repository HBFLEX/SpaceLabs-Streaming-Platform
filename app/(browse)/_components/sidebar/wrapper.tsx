'use client'
import React from 'react'
import { useSidebarStore } from '@/store/use-sidebar'
import { cn } from '@/lib/utils'


interface wrapperProps{
    children: React.ReactNode
}

export const Wrapper = ({children}: wrapperProps ) => {
  
  const { collapsed } = useSidebarStore((state) => state)
  
    return (
    <aside className={
        cn('fixed left-0 flex flex-col w-[200px] h-full bg-gray-800 border-r border-[#333] z-40', collapsed && 'w-[70px]')}>
        {children}
    </aside>
  )
}
