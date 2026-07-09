import { League } from '@/app/generated/prisma/client';
import LeagueBoard from '@/components/LeagueBoard/LeagueBoard'

export default async function LeagueList({ leagues }: { leagues: Array<League> }) {
  return (
    <div className="col-span-6 p-5 bg-white">
      {leagues.map(league => <LeagueBoard league={league} key={league.id} />)}
    </div>);
}

