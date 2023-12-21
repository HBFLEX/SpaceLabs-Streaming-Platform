'use client'


import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon, X } from 'lucide-react'
import React from 'react'

const search = () => {

  const [ searchValue, setSearchValue ] = useState('')

  const clearSearchValue = () => {
    setSearchValue('')
  }

  return (
    <form className='relative flex w-full lg:w-[600px] ml-2 mr-1 items-center gap-x-0'>
        <Input 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search'
            type='text'
            className='bg-gray-700 border-none text-white focus:ring-offset-0 focus:ring-0 rounded-r-none'
        />
        {
            searchValue 
            && 
            <X 
            onClick={clearSearchValue}
            className='absolute top-2.3 right-16 hover:cursor-pointer text-muted-foreground hover:text-red-500'
            />
        }
        <Button type='submit' className='hover:bg-transparent rounded-l-none'>
            <SearchIcon className='text-muted-foreground hover:text-white' />
        </Button>
    </form>
  )
}

export default search