import React from 'react' 
import Navbar from '../dashboard/_components/navbar'
import { Sidebar } from './_components/sidebar'
import Container from './_components/container'


const DashboardLayout = ({
    children
}: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        <div className='flex space-x-10 gap-10'>
          <Sidebar />
          <Container>
            {children}
          </Container>
        </div>
    </>
  )
}

export default DashboardLayout