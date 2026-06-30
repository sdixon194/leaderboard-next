import LeagueList from "@/components/LeagueList/LeagueList";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";
import prisma from '@/lib/prisma';

export default async function LeaguePage() {

  /*< LeagueList leagues={leagueObject} />*/
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }
  const { user } = session;
  const leagueObject = await prisma.leaguePlayers.findMany({
    where: { userId: user.id },
    select: {
      league: {
        include: {
          games: {
            orderBy: {
              begin: "desc",
            },
            take: 1,
          },
        },
      },
    }
  })
  return (
    <div className='col-span-12 bg-slate-100 grid grid-cols-12 gap-x-2 gap-y-2'>
      <div className='col-span-3'>2</div>
      < LeagueList leagues={leagueObject} />
      <div className='col-span-3'>5</div>
    </div >
  )
}
