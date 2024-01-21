'use client'


import { updateStream } from '@/actions/stream'
import { Switch } from '@/components/ui/switch'
import React, { useTransition } from 'react'
import { toast } from 'sonner'

type FieldTypes = "isChatEnabled" | "isChatFollowersOnly" | "isChatDelayed"

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

  const [ isPending, startTransition ] = useTransition()

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
      .then(() => toast.success('Chat settings updated'))
      .catch(() => toast.error('Something went wrong'))
    })
  }

  return (
    <div className='rounded-md bg-muted p-6'>
        <div className='flex items-center justify-between'>
            <div>
              <p>{label}</p>
            </div>
            <div>
              <Switch onCheckedChange={onChange} checked={value} disabled={isPending}>
                { value ? 'On' : 'Off' }
              </Switch>
            </div>
        </div>
    </div>
  )
}

export default ToggleCard