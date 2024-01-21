'use client'

import Hint from '@/components/Hint'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCheck, Copy } from 'lucide-react'
import React, { useState } from 'react'

interface UrlCardProps{
    value: string | null
}

const UrlCard = ({ value }:UrlCardProps) => {

    const [ isCopied, setIsCopied ] = useState(false)

    const onCopy = () => {
        setIsCopied(true)
        navigator.clipboard.writeText(value || '')
        setTimeout(() => { setIsCopied(false) }, 1000)
    }

    const Icon = isCopied ? CheckCheck : Copy
    const copyHintLabel = isCopied ? 'Copied' : 'Copy'

    return (
    <div className='rounded-md bg-muted p-6'>
        <div className='flex items-center gap-x-6'>
            <p className='font-semibold shrink-0'>Server URL</p>
            <Input value={value || ''} placeholder='Server URL' disabled className='w-full' />
            <Hint label={copyHintLabel} side='bottom' asChild>
                <Button disabled={!value || isCopied} variant='ghost' onClick={onCopy}><Icon className='h-4 w-4'></Icon></Button>
            </Hint>
        </div>
    </div>
    )
}

export default UrlCard