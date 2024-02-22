'use client'


import { useViewerToken } from "@/hooks/create-viewer-token"
import { Stream, User } from "@prisma/client"

import { VideoOff } from 'lucide-react'

import { LiveKitRoom } from '@livekit/components-react'

import { Video } from './video'

interface StreamPlayerProps{
    user: User & { stream: Stream | null }
    stream: Stream
    isFollowing: boolean
}

export const StreamPlayer = ({user, stream}: StreamPlayerProps) => {

    const {token, name, identity} = useViewerToken(user.id)

    if(!token || !name || !identity){
        return (
            <div className="mt-20 ml-10 flex flex-col justify-center gap-y-5">
                <VideoOff className="h-12 w-12 text-muted-foreground animate-pulse" />
                <p className="text-muted-foreground">Cannot watch stream</p>
            </div>
        )
    }

    return (
        <>
            <LiveKitRoom 
                token={token}
                serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
                className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full"
            >
                <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto pb-10">
                    <Video 
                        hostName={user.username}
                        hostIdentity={user.id}
                    />
                </div>
            </LiveKitRoom>
        </>
    )
}