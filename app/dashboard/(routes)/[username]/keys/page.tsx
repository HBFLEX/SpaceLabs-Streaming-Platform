import { Button } from '@/components/ui/button'
import React from 'react'
import UrlCard from './_components/url-card'
import { getSelf } from '@/lib/auth-service'
import { getStreamByUserId } from '@/lib/stream-service'
import KeyCard from './_components/key-card'

const page = async () => {

    const self = await getSelf()
    if(!self) throw new Error('Forbidden')

    const stream = await getStreamByUserId(self.id)
    if(!stream) throw new Error('Stream data not found')

    return (
    <div className='pt-10 pr-10'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>Keys & URL's</h1>
            <Button variant='primary'>Generate</Button>
        </div>
        <div className='mt-6'>
            <UrlCard 
                value={stream.serverUrl}
            />
            <KeyCard 
                value={stream.streamKey}
            />
        </div>
    </div>
    )
}

export default page