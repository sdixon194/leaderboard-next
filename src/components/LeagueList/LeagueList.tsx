import { Game } from "@/app/generated/prisma/client";
import LeagueBoard from '@/components/LeagueBoard/LeagueBoard'
type LeagueDashType = {
  league: {
    id: string,
    name: string,
    ownerId: string,
    createdAt: Date,
    updatedAt: Date,
    games: Array<Game>,
  }
}

export default function LeagueList({ leagues }: { leagues: Array<LeagueDashType> | [] }) {
  return (
    <div className="col-span-6 p-5 bg-white">
      <h1>My Leagues</h1>
      {leagues.map(league => <LeagueBoard league={league} key={league.league.id} />)}
    </div>);
}
