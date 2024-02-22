'use client'

import { Participant, Track } from "livekit-client"
import { useTracks } from "@livekit/components-react"

import { useRef } from "react"


interface LiveVideoProps{
    participant: Participant
}

export const LiveVideo = ({participant}: LiveVideoProps) => {

    const videoRef = useRef<HTMLVideoElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

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
        </div>
    )
}