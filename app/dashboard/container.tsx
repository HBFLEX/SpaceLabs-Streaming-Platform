import React from 'react'
import { Sidebar } from './_components/sidebar'

interface ContainerProps{
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='flex space-x-10 gap-10'>
        <Sidebar />
        {children}
    </div>
  )
}

export default Container