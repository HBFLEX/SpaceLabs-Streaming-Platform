'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useCreatorSidebarStore } from '@/store/use-creator-sidebar'


interface WrapperProps{
  children: React.ReactNode
}

const Wrapper = ({children}:WrapperProps) => {

  const { collapsed } = useCreatorSidebarStore((state) => state)

  return (
    <aside className={
      cn(
        'fixed left-0 z-40 h-full w-[70px] lg:w-60 flex flex-col items-center bg-gray-800 border-r border-gray-500/10',
        collapsed && 'lg:w-[70px]'
        )}>
      {children}
    </aside>
  )
}

export default Wrapper