import React from 'react'
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
 } from '@/components/ui/tooltip'

interface HintProps{
    label: string
    children: React.ReactNode
    asChild: boolean
    side?: 'left' | 'right' | 'bottom' | 'top'
    align?: 'center' | 'start' | 'end'
}

const Hint = ({
    label,
    children,
    asChild,
    side,
    align
}: HintProps) => {

  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild={asChild}>
                {children}
            </TooltipTrigger>
        
            <TooltipContent className='bg-white text-black' side={side} align={align}>
                <p className='text-semibold'>{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default Hint