import { IngressInput } from 'livekit-server-sdk'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog'
import {
    Alert,
    AlertTitle,
    AlertDescription
} from '@/components/ui/alert'
import React, { useState, useTransition, useRef, ElementRef } from 'react'
import { AlertTriangle } from 'lucide-react'
import { 
    Select, 
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem
} from '@/components/ui/select'
import { createIngress } from '@/actions/ingress'
import { toast } from 'sonner'


const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)

type IngressType = typeof RTMP | typeof WHIP

const ConnectModal = () => {

    const [ ingressType, setIngressType ] = useState<IngressType>(RTMP)
    const [ isPending, startTransition ] = useTransition()

    let closeRef = useRef<ElementRef<"button">>(null)

    const onSubmit = () => {
        startTransition(() => {
            createIngress(parseInt(ingressType))
                .then(() => { toast.success('Ingress created successfully!'); closeRef?.current?.click(); })
                .catch(() => toast.error('Something went wrong!'))
        })
    }

    return (
    <Dialog>

        <DialogTrigger asChild>
            <Button variant='primary'>Generate</Button>
        </DialogTrigger>

        <DialogContent>

            <DialogHeader>
                <DialogTitle>Generate Connection 🔌</DialogTitle>
            </DialogHeader>

            <Select value={ingressType} onValueChange={(value) => setIngressType(value)} disabled={isPending}>
                <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Ingress Type'></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={RTMP}>RTMP</SelectItem>
                    <SelectItem value={WHIP}>WHIP</SelectItem>
                </SelectContent>
            </Select>
            <Alert>
                <AlertTriangle className='w-4 h-4' />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>
                    This action will reset all active streams using the current connection.
                </AlertDescription>
            </Alert>

            <div className='flex justify-between mt-10'>
                <DialogClose ref={closeRef} asChild>
                    <Button variant='ghost'>Cancel</Button>
                </DialogClose>
                <Button variant='primary' onClick={onSubmit} disabled={isPending}>Generate</Button>
            </div>
            <DialogFooter>&copy; Sponsored by SpaceLabs Tech.</DialogFooter>
        </DialogContent>
    </Dialog>
    )
}

export default ConnectModal