import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='mt-10 mr-10'>
        <div className='flex justify-between mb-4'>
            <Skeleton className='w-[200px] h-10'></Skeleton>
            <Skeleton className='w-20 h-10 rounded-md'></Skeleton>
        </div>
        <Skeleton className='w-full h-20 rounded-md mb-3 mt-3'></Skeleton>
        <Skeleton className='w-full h-40 rounded-md'></Skeleton>
    </div>
  )
}

export default loading