import React from 'react'
import { Wrapper } from './wrapper'
import Toggle from './toggle'
import Recommended from './recommeded-users'
import FollowingUsers from './following-users'


export const Sidebar = () => {

  return (
    <Wrapper>
        <Toggle />
        <Recommended />
        <FollowingUsers />
    </Wrapper>
  )
}
