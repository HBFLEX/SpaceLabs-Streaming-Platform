import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const ChatLoading = () => {
  return (
    <div className='pt-10 pr-10'>
        <Skeleton className='h-10 w-[200px] mb-4' />
        <div className='space-y-4'><Skeleton className='h-10 w-full rounded-md p-10 mb-4' /></div>
        <div className='space-y-4'><Skeleton className='h-10 w-full rounded-md p-10 mb-4' /></div>
        <div className='space-y-4'><Skeleton className='h-10 w-full rounded-md p-10 mb-4' /></div>
    </div>
  )
}

export default ChatLoading