import React, { Suspense } from 'react'
import Navbar from './_components/navbar'
import { Sidebar } from './_components/sidebar'
import { SidebarSkeleton } from './_components/sidebar/wrapper'
import Container from './_components/container'

const BrowseLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        <div className='flex flex-col h-full'>
            <Suspense fallback={<SidebarSkeleton />}>
              <Sidebar />
            </Suspense>
            <Container>
              {children}
            </Container>
        </div>
    </>
  )
}

export default BrowseLayout