import React from 'react'
import Logo from './logo'
import Search from './search'
import { Actions } from './actions'

const index = () => {
  return (
    <nav className='sticky top-0 flex items-center justify-between bg-gray-800 h-20'>
        <Logo />
        <Search />
        <Actions />
    </nav>
  )
}

export default index