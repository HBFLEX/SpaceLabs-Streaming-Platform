'use client'

import { Participant, Track } from "livekit-client"
import { useTracks } from "@livekit/components-react"

import { useRef, useState } from "react"
import { FullScreenControl } from "./fullscreen-control"

import { useEventListener } from "usehooks-ts"


interface LiveVideoProps{
    participant: Participant
}

export const LiveVideo = ({participant}: LiveVideoProps) => {

    const videoRef = useRef<HTMLVideoElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [isFullScreen, setIsFullScreen] = useState(false)

    const toggleFullScreen = () => {
        if(isFullScreen){
            document.exitFullscreen()
            setIsFullScreen(false)
        }else if(wrapperRef?.current){
            wrapperRef?.current.requestFullscreen()
            setIsFullScreen(true)
        }
    }

    const handleFullScreenChange = () => {
        const isCurrentlyFullScreen = document.fullscreenElement !== null
        setIsFullScreen(isCurrentlyFullScreen)
    }

    useEventListener('fullscreenchange', handleFullScreenChange, wrapperRef)

    useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter(track => track.participant.identity === participant.identity)
    .forEach(track => {
        if(videoRef.current){
            track.publication.track?.attach(videoRef.current)
        }
    })

    return (
        <div className="relative h-full flex" ref={wrapperRef}>
            <video width='100%' ref={videoRef} />
            <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-all">
                <div className="absolute w-full bottom-0 flex h-14 bg-gradient-to-r from-neutral-900 px-4">
                    <FullScreenControl isFullScreen={isFullScreen} toggleFullScreen={toggleFullScreen} />
                </div>
            </div>
        </div>
    )
}