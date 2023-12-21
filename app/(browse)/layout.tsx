import React from 'react'
import Navbar from './_components/navbar'

const BrowseLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        <div className='flex flex-col h-full pt-20'>
            {children}
        </div>
    </>
  )
}

export default BrowseLayout