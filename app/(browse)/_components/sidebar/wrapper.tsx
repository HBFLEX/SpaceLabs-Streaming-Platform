'use client'
import React, { useEffect, useState } from 'react'
import { useSidebarStore } from '@/store/use-sidebar'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'


interface wrapperProps{
    children: React.ReactNode
}

export const Wrapper = ({children}: wrapperProps ) => {

    const { collapsed } = useSidebarStore((state) => state)

    const [ isClient, setIsClient ] = useState(false)

    useEffect(() => {
      setIsClient(true)
    },[])

    if(!isClient) return (
      <aside className={
        cn('fixed left-0 flex flex-col w-[200px] h-full bg-gray-800 border-r border-[#333] z-40', collapsed && 'w-[70px]')}>
        <SidebarSkeleton />
      </aside>
    )
    
    return (
      <aside className={
          cn('fixed left-0 flex flex-col w-[200px] h-full bg-gray-800 border-r border-[#333] z-40', collapsed && 'w-[70px]')}>
          {children}
      </aside>
  )
}

export const SidebarSkeleton = () => {

  const { collapsed } = useSidebarStore((state) => state)

  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-[200px] h-full  bg-gray-800 border-r border-gray-800 z-40'>
      {
        [...Array(3)].map((_, i) => (
          <div className='flex gap-x-3 p-2 mt-2'>
            <Skeleton className='w-8 rounded-md h-8' key={i} />
            {
              !collapsed && (
                <Skeleton className='flex-1 rounded-md h-8' key={i} />
              )
            }
            </div>
        ))
      }
    </aside>
  )
}