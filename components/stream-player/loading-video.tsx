import { Loader } from "lucide-react"


interface OfflineVideoProps{
    label: string
}


export const LoadingVideo = ({label}: OfflineVideoProps) => {
    return (
        <div className="h-full flex flex-col space-y-4 justify-center items-center">
            <Loader className="h-12 w-12 text-muted-foreground animate-spin" />
            <p className="text-muted-foreground capitalize">{label}</p>
        </div>
    )
}