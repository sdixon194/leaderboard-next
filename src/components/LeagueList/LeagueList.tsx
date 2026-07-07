import LeagueBoard from '@/components/LeagueBoard/LeagueBoard'
import prisma from '@/lib/prisma';

export default async function LeagueList({ userId }: { userId: string }) {
  const leagueObject = await prisma.leaguePlayers.findMany({
    where: { userId: userId },
    select: {
      league: {
        include: {
          games: {
            orderBy: {
              begin: "desc",
            },
            take: 5,
          },
        },
      },
    }
  });

  return (
    <div className="col-span-6 p-5 bg-white">
      {leagueObject.map(league => <LeagueBoard league={league} key={league.league.id} />)}
    </div>);
}

