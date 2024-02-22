import { StreamPlayer } from '@/components/stream-player/'
import { getSelfByUsername } from '@/lib/auth-service'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

interface DashboardProps{
    params: { username: string }
}

const Dashboard = async ({
    params
}: DashboardProps) => {

  const user = await getSelfByUsername(params.username)
  const loggedInUser = await currentUser()

  if(user.externalUserId !== loggedInUser?.id || !user.stream){
    throw new Error('Unauthorized')
  }

  if(!user) redirect('/')

  return (
    <div className='h-full'>
      <StreamPlayer user={user} stream={user.stream} isFollowing/>
    </div>
  )
}

export default Dashboard