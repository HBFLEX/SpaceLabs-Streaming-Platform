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
    <div className='pt-10 pr-10'>
        <h1 className='text-3xl font-bold mb-4'>Chat Settings</h1>
        <div className='mb-3'>
          <ToggleCard 
            field="isChatEnabled"
            value={stream.isChatEnabled}
            label="Enable Chat"
          />
        </div>

        <div className='mb-3'>
          <ToggleCard 
            field="isChatFollowersOnly"
            value={stream.isChatFollowersOnly}
            label="Enable Chat Followers Only"
          />
        </div>

        <div className='mb-3'>
          <ToggleCard 
            field="isChatDelayed"
            value={stream.isChatDelayed}
            label="Enable Chat Delay"
          />
        </div>
    </div>
  )
}

export default page