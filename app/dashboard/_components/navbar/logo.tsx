'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const logo = () => {

  const path = usePathname()

  return (
    <Link href={path}>
        <div className='flex gap-x-4 ml-2 lg:ml-4 hover:opacity-70 hover:cursor-pointer'>
            <div className='bg-white rounded-full p-1'>
                <Image 
                src='/spacelabs-logo.png'
                alt='spacelabs-logo'
                width='50'
                height='50'
                className='shrink-0'
                />
            </div>
            <div className='hidden lg:block flex flex-col gap-y-0'>
                <p className='text-xl text-semibold text-white'>SpaceLabs</p>
                <p className='text-muted-foreground'>Dashboard 📹</p>
            </div>
        </div>
    </Link>
  )
}

export default logo