import { Switch } from '@/components/ui/switch'
import React from 'react'

type FieldTypes = "isChatEnabled" | "isLive" | "isChatDelayed"

interface ToggleCardProps{
    field: FieldTypes
    value: boolean
    label: string
}

const ToggleCard = ({
    field,
    value,
    label
}:ToggleCardProps) => {
  return (
    <div className='rounded-md bg-muted p-6'>
        <div className='flex items-center justify-between'>
            <div><p>{label}</p></div>
            <div><Switch checked={value}>{ value ? 'On' : 'Off' }</Switch></div>
        </div>
    </div>
  )
}

export default ToggleCard