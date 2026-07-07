import LeagueList from "@/components/LeagueList/LeagueList";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";

export default async function LeaguePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }
  const { user } = session;
  return (
    <div className='col-span-12 bg-slate-100 grid grid-cols-12 gap-x-2 gap-y-2'>
      <div className='col-span-3'>2</div>
      < LeagueList userId={user.id} />
      <div className='col-span-3'>5</div>
    </div >
  )
}
