import { cn } from '@/lib/utils'
import React from 'react'

interface LiveBadgeProps{
    canShowBadge?: boolean
}

const LiveBadge = ({
    canShowBadge
}: LiveBadgeProps) => {
  return (
    <div className={cn(canShowBadge && 'absolute -bottom-3 left-1/2 transform -translate-x-1/2')}>
        <p className='bg-rose-700 p-1 rounded-md text-semibold text-center'>Live</p>
    </div>
  )
}

export default LiveBadge