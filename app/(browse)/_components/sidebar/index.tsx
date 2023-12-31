import React from 'react'
import { Wrapper } from './wrapper'
import Toggle from './toggle'
import Recommended from './recommeded-users'
import { RecommendedUsersListSkeleton } from './RecommendedUsersList'



export const Sidebar = () => {

  return (
    <Wrapper>
        <Toggle />
        <Recommended />
    </Wrapper>
  )
}

export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full  bg-gray-800 border-r border-gray-800 z-40'>
      <RecommendedUsersListSkeleton />
    </aside>
  )
}