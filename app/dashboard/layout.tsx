import React from 'react' 
import Navbar from '../dashboard/_components/navbar'
import { Sidebar } from './_components/sidebar'


const DashboardLayout = ({
    children
}: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        <div className='flex space-x-10 gap-10'>
          <Sidebar />
          {children}
        </div>
    </>
  )
}

export default DashboardLayout