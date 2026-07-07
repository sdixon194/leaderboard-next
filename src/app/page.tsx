"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && session?.user) {
      router.push("/dashboard");
    }
  }, [isPending, session, router]);

  return (
    <div className="flex justify-items-center gap-4 bg-slate-100 mx-30">
      <div className='bg-white rounded-sm p-2 w-full'>
        <h1>Welcome to Leaderboard!</h1>
        <p>Leaderboard lets you get a group of friends together and go head to head by posting scores for any game you're all playing at the moment.</p> <br></br>
        <p>Join an existing league, or create one of your own!</p>
      </div>
    </div >
  );
}
