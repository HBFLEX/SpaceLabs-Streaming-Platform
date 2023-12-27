'use client'
import React from 'react'
import { Wrapper } from './wrapper'
import { useSidebarStore } from '@/store/use-sidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import Hint from '@/components/Hint'


const index = () => {

  const { collapsed, onExpand, onCollapse } = useSidebarStore((state) => state)

  const label = collapsed ? 'Expand' : 'Collapse'

  return (
    <Wrapper>
        {
          !collapsed && (
            <div className='w-full flex flex-col mt-4'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-white ml-3'>For you</p>
                <Hint label={label} side='right' asChild>
                  <Button variant='ghost' className='h-auto ml-auto hover:bg-transparent' onClick={onCollapse}>
                    <ArrowLeftFromLine className='h-4 text-white' />
                  </Button>
                </Hint>
              </div>
            </div>
          )
        }

        {
          collapsed && (
            <div className='hidden lg:flex flex-col items-center justfiy-center'>
              <Hint label={label} side='right' asChild>
                <Button variant='ghost' className='hover:bg-transparent' onClick={onExpand}>
                  <ArrowRightFromLine className='h-4 text-white' />
                </Button>
              </Hint>
            </div>
          )
        }
    </Wrapper>
  )
}

export default index