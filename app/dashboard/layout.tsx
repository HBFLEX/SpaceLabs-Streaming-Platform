import React from 'react' 
import Navbar from '../dashboard/_components/navbar'
import Container from './container'


const DashboardLayout = ({
    children
}: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        <Container children={children} />
    </>
  )
}

export default DashboardLayout