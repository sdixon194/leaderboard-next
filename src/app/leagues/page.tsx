import LeagueList from "@/components/LeagueList/LeagueList";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from '@/lib/prisma';

export default async function LeaguePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  const { user } = session;
  const leagues = await prisma.league.findMany({
    where: {
      players: {
        some: {
          id: user.id
        }
      }
    },
    include: {
      games: true,
      players: true
    }
  })
  return (
    <div className="flex m-5 justify-center">
      <div className="w-2/3">
        <LeagueList leagues={leagues} />
      </div>
    </div>
  );
}
