'use client';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  return (
    <nav className='p-2 bg-white'>
      {!session?.user ?
        <SignedOut /> : <SignedIn />
      }
    </nav >
  )
}

const SignedOut = () => {
  return (
    <div className='flex gap-2 mr-5'>
      <Link href='/sign-in' className="ml-auto w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign In</Link>
      <Link href='/sign-up' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign Up</Link>
    </div>
  )
}

const SignedIn = () => {
  const router = useRouter();
  return (
    <div className='flex gap-2 ml-5'>
      <Link href='/dashboard' className="ml-5 w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Dashboard</Link>
      <Link href='/leagues' className="ml-5 w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Leagues</Link>
      <button
        onClick={() => authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          }
        })}
        className="ml-auto mr-5 w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign Out
      </button>
    </div>
  )
}
export default NavBar;
