import { getSelfByUsername } from '@/lib/auth-service'
import { redirect } from 'next/navigation'
import React from 'react'

interface DashboardProps{
    params: { username: string }
}

const Dashboard = async ({
    params
}: DashboardProps) => {

  const user = await getSelfByUsername(params.username)

  if(!user) redirect('/')

  return (
    <div>Creator - {user.username}</div>
  )
}

export default Dashboard