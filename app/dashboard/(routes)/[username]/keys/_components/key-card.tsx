'use client'

import Hint from '@/components/Hint'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCheck, Copy } from 'lucide-react'
import React, { useState } from 'react'

interface KeyCardProps{
    value: string | null
}

const KeyCard = ({ value }: KeyCardProps) => {

    const [ isCopied, setIsCopied ] = useState(false)
    const [ showServerKey, setShowServerKey ] =  useState(false)

    const onCopy = () => {
        setIsCopied(true)
        navigator.clipboard.writeText(value || '')
        setTimeout(() => { setIsCopied(false) }, 1000)
    }

    const Icon = isCopied ? CheckCheck : Copy
    const copyHintLabel = isCopied ? 'Copied' : 'Copy'

    return (
    <div className='rounded-md mt-4 bg-muted p-6'>
        <div className='flex items-center gap-x-6 mb-2'>
            <p className='font-semibold shrink-0'>Server Key</p>
            <Input disabled type={showServerKey ? 'text' : 'password'} value={value || ''} placeholder={value || 'Server Key'} className='w-full' />
            <Hint label={copyHintLabel} side='bottom' asChild>
                <Button disabled={!value || isCopied} onClick={onCopy} variant='ghost'>
                    <Icon className='w-4 h-4' />
                </Button>
            </Hint>
        </div>
        <div className='flex items-center justify-center'>
            <Button disabled={!value || isCopied} onClick={() => setShowServerKey(!showServerKey)} variant='link'>
                { showServerKey ? 'Hide' : 'Show' }
            </Button>
        </div>
    </div>
    )
}

export default KeyCard