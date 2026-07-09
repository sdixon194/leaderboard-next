import { Game, League, Score, User } from "@/app/generated/prisma/client";
import Link from "next/link";

type ScoreType = Score & {
  player: User
}
type GameType = Game & {
  scores: Array<ScoreType>
}

type LeagueType = League & {
  games: Array<GameType>
}

const LeagueBoard = ({ league }: { league: LeagueType }) => {
  const url = `/leagues/${league.id}`;
  return (
    <div className="m-auto">
      <p className="font-bold text-2xl"><Link href={url}>{league.name}</Link></p>
      {league.games.map((game) => <GameTopLine game={game} key={game.id} />)}
    </div >
  )
}

const GameTopLine = ({ game }: { game: GameType }) => {
  return (
    <div className="flex gap-3">
      <p className="flex-2">{game.name}<span className="text-sm">{`(${game.category})`}</span></p>
      <p className='flex-1'>{game.scores.length > 0 ? game.scores[0].player.name : 'No Scores'}</p>
      <p className='flex-1'>{game.scores.length > 0 && game.scores[0].score.toLocaleString()}</p>
      <p className="flex-1">{game.end?.toLocaleDateString()}</p>
    </div>
  )
}
export default LeagueBoard;
