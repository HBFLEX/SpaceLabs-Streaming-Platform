import React from 'react'
import { Wrapper } from './wrapper'
import Toggle from './toggle'
import Recommended from './recommeded-users'


export const Sidebar = () => {

  return (
    <Wrapper>
        <Toggle />
        <Recommended />
    </Wrapper>
  )
}
