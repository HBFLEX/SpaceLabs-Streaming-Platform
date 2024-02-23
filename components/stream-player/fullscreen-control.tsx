import { Maximize, Minimize } from "lucide-react";
import Hint from "../Hint";

interface FullScreenControlProps{
    isFullScreen: boolean
    toggleFullScreen: () => void
}


export const FullScreenControl = ({
    isFullScreen,
    toggleFullScreen
}: FullScreenControlProps) => {

    const Icon = isFullScreen ? Minimize : Maximize
    const label = isFullScreen ? 'Exit FullScreen' : 'Enter FullScreen'

    return (
        <Hint label={label} asChild>
            <button onClick={toggleFullScreen} className="bg-transparent p-1.5 rounded-lg">
                <Icon className="h-5 w-5" />
            </button>
        </Hint>
    )
}

