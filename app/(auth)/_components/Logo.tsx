import Image  from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const Logo = () => {
    return (
        <div className={cn('flex flex-col gap-y-4 mb-3', font.className)}>
            <div className="bg-white rounded-full p-1">
                <Image 
                src='/spacelabs-logo.png' 
                alt='SpaceLabs Logo'
                height='100'
                width='100'
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold">SpaceLabs</h1>
                <p className="text-muted-foreground">Stream live 🎮</p>
            </div>
            
        </div>
    )
}
