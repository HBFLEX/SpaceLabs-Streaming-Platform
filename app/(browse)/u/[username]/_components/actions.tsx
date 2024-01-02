'use client'

import { onFollow, onUnfollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import React, { useTransition } from 'react'


interface ActionsProps{
  isFollowing: boolean
  userId: string
}

const Actions = ({
  isFollowing,
  userId,
}: ActionsProps) => {

  const [ isPending, startTransition ] = useTransition()

  const followUser = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`, {description: `${new Date().toLocaleTimeString()} - ${new Date().getFullYear()}`}))
        .catch((_) => toast.error('Internal server error. Try again later!'))
    })
  }

  const unFollowUser = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`,  {description: `${new Date().toLocaleTimeString()} - ${new Date().getFullYear()}`}))
        .catch((_) => toast.error('Internal server error. Try again later!'))
    })
  }

  return (
    <div>
      <Button 
        disabled={isPending} 
        onClick={isFollowing ? unFollowUser : followUser} 
        variant='primary'>
          {isFollowing ? 'unfollow' : 'follow'}
      </Button>
    </div>
  )
}

export default Actions