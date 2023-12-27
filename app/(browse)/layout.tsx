import React from 'react'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

const BrowseLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        <div className='flex flex-col h-full'>
            <Sidebar />
            {children}
        </div>
    </>
  )
}

export default BrowseLayout