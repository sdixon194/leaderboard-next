import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";
import NewLeagueForm from "@/components/NewLeagueForm/NewLeagueForm";
import LeagueList from "@/components/LeagueList/LeagueList";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }
  const { user } = session;
  return (
    <div className="m-5 flex flex-col gap-5">
      <div className="mx-5 p-5 rounded-sm drop-shadow-md bg-white">
        <h1>Dashboard</h1>
        <p>Welcome, {user.name || "User"}!</p>
      </div>
      <div className="p-5 flex gap-5">
        <div className="p-5 rounded-sm drop-shadow-md bg-white flex-1">
          <h2>Create New League</h2>
          <NewLeagueForm ownerId={user.id} />
        </div>
        <div className="p-5 rounded-sm drop-shadow-md bg-white flex-2">
          <h2>My Leagues</h2>
          <LeagueList userId={user.id} />
        </div>
      </div>
    </div >
  );
}
