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
    <div className='flex m-5 justify-center'>
      <div className="w-2/3">
        <LeagueList userId={user.id} />
      </div>
    </div >
  )
}
