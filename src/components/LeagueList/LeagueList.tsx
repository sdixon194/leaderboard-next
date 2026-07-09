import { League, Score, Game, User } from '@/app/generated/prisma/client';
import LeagueBoard from '@/components/LeagueBoard/LeagueBoard'

type ScoreType = Score & {
  player: User
}
type GameType = Game & {
  scores: Array<ScoreType>
}
type LeagueType = League & {
  games: Array<GameType>
}

export default async function LeagueList({ leagues }: { leagues: Array<LeagueType> }) {
  return (
    <div className="col-span-6 p-5 bg-white">
      {leagues.map(league => <LeagueBoard league={league} key={league.id} />)}
    </div>);
}

