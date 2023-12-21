import { Button } from "@/components/ui/button"
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { Clapperboard } from "lucide-react"
import Link from "next/link"

const actions = async () => {

  const user = await currentUser()

  return (
    <div className="flex items-center gap-x-1 mr-2 lg:mr-4">
      {
        !!user
        ?
        <>
          <Link href={`/u/}}`}>
          <Button className="flex items-center space-x-1" size='sm' variant='ghost'>
            <Clapperboard className="text-white text-lg" />
            <p className="hidden lg:block text-white text-semibold text-lg">Dashboard</p>
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

export default actions