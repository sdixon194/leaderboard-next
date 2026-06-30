'use client';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  return (
    <nav className='col-span-12 p-2 m-2 bg-white'>
      {!session?.user ?
        <span className='m-2'>
          <Link href='/sign-in' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign In</Link>
          <Link href='/sign-up' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign Up</Link>
        </span> :
        <span>
          <Link href='/dashboard' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border m-2">Dashboard</Link>
          <Link href='/leagues' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Leagues</Link>
          <button
            onClick={() => authClient.signOut()}
            className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 m-2" > Sign Out
          </button>
        </span>
      }
    </nav >
  )
}
export default NavBar;
