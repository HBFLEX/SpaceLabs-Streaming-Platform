import { getSelf } from '@/lib/auth-service'
import { getStreamByUserId } from '@/lib/stream-service'
import React from 'react'
import ToggleCard from './_components/toggle-card'

const page = async () => {

  const self = await getSelf()
  if(!self) throw new Error('Forbidden')

  const stream = await getStreamByUserId(self.id)
  if(!stream) throw new Error('No stream found')

  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-4'>Chat Settings</h1>
        <div className='mb-3'>
          <ToggleCard 
            field="isChatEnabled"
            value={stream.isChatEnabled}
            label="Enable Chat"
          />
        </div>
    </div>
  )
}

export default page