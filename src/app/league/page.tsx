import LeagueList from "@/components/LeagueList/LeagueList";
import { authClient } from "@/lib/auth-client"
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";
import prisma from '@/lib/prisma';
import { League } from "../generated/prisma/client";

export default async function LeaguePage() {
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
    <div>
      <LeagueList leagues={leagueObject} />
    </div>
  )
}
