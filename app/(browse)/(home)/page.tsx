'use client'
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <p className='text-red-500 font-bold'>
        Welcome to SpaceLabs
      </p>

      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
