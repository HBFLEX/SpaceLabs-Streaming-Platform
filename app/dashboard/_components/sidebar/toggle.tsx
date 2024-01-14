'use client'

import React from 'react'
import { useCreatorSidebarStore } from '@/store/use-creator-sidebar'
import { Button } from '@/components/ui/button'
import Hint from '@/components/Hint'
import { ArrowLeftFromLine, ArrowRightFromLine, Ghost } from 'lucide-react'

const Toggle = () => {

    const { collapsed, onExpand, onCollapse } = useCreatorSidebarStore((state) => state)
    const label = collapsed ? 'Expand' : 'Collapse'
  return (
    <>
        {collapsed && (
            <div className='w-full hidden lg:flex items-center justify-center pt-4 mb-4'>
                <Hint label={label} side='right' asChild>
                    <Button variant='ghost' className='h-auto p-2 text-white hover:text-primary' onClick={onExpand}>
                        <ArrowRightFromLine className='h-4 w-4' />
                    </Button>
                </Hint>
            </div>
        )}

        {!collapsed && (
            <div className='p-3 pl-6 hidden lg:flex justify-between items-center mb-2 w-full'>
                <p className='font-semibold text-white'>
                    Dashboard
                </p>
                <Hint label={label} side='right' asChild>
                    <Button variant='ghost' className='h-auto p-2 text-white' onClick={onCollapse}>
                        <ArrowLeftFromLine className='h-4 w-4' />
                    </Button>
                </Hint>
            </div>
        )}
    </>
  )
}

export default Toggle