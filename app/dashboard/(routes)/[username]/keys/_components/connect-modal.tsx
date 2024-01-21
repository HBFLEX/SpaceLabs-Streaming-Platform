import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
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
import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { 
    Select, 
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem
} from '@/components/ui/select'

const ConnectModal = () => {
  return (
    <Dialog>

        <DialogTrigger>
            <Button variant='primary'>Generate</Button>
        </DialogTrigger>

        <DialogContent>

            <DialogHeader>
                <DialogTitle>Generate Connection 🔌</DialogTitle>
            </DialogHeader>

            <Select>
                <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Ingress Type'></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='RTMP'>RTMP</SelectItem>
                    <SelectItem value='WHIP'>WHIP</SelectItem>
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
                <DialogClose>
                    <Button variant='ghost'>Cancel</Button>
                </DialogClose>
                <Button variant='primary'>Generate</Button>
            </div>
            <DialogFooter>&copy; Sponsored by SpaceLabs Tech.</DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ConnectModal