import { Button } from "@/components/ui/button"
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { LogOut } from "lucide-react"
import Link from "next/link"



export const Actions = async () => {

  const user = await currentUser() || null


  return (
    <div className="flex items-center gap-x-1 mr-2 lg:mr-4">
      {
        !!user
        ?
        <>
          <Link href={`/`}>
          <Button className="flex items-center space-x-1 hover:bg-transparent" size='sm' variant='ghost'>
            <LogOut className="text-white text-lg" />
            <p className="hidden lg:block text-white text-semibold text-lg">Exit</p>
          </Button>
          </Link>
          <UserButton afterSignOutUrl='/' />
        </>
        :
        <SignInButton>
          <Button variant='primary' className="ml-2">
            Login
          </Button>
        </SignInButton>
      }
    </div>
  )
}
