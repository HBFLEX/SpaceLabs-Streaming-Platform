import React from 'react'
import Logo from './logo'
import { Actions } from './actions'

const index = () => {
  return (
    <nav className='sticky top-0 flex items-center justify-between shadow-lg border-b border-gray-600/30 bg-gray-800 h-20'>
        <Logo />
        <Actions />
    </nav>
  )
}

export default index