'use client';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  return (<nav>
    {!session?.user ?
      <span>
        <Link href='/sign-in' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign In</Link>
        <Link href='/sign-up' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Sign Up</Link>
      </span> :
      <span>
        <Link href='/dashboard' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Dashboard</Link>
        <Link href='/leagues' className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200 border">Leagues</Link>
        <button
          onClick={() => authClient.signOut()}
          className="w-auto bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200" > Sign Out
        </button>
      </span>
    }
  </nav >
  )
}
export default NavBar;
