import { Game } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";

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

const LeagueBoard = ({ league }: { league: LeagueDashType }) => {
  const games = league.league.games;
  const url = `/leagues/${league.league.id}`;
  return (
    <div className="m-auto">
      <p className="font-bold text-2xl"><Link href={url}>{league.league.name}</Link></p>
      {games.map((game) => <GameTopLine game={game} key={game.id} />)}
    </div >
  )
}

const GameTopLine = async ({ game }: { game: Game }) => {
  const scores = await prisma.score.findMany({
    where: { gameId: game.id },
    distinct: ['playerId'],
    orderBy: {
      score: 'desc',
    },
    include: { player: true }
  });
  console.log(scores);
  return (
    <div className="flex gap-3">
      <p className="flex-2">{game.name}<span className="text-sm">{`(${game.category})`}</span></p>
      <p className='flex-1'>{scores.length > 0 ? scores[0].player.name : 'No Scores'}</p>
      <p className='flex-1'>{scores.length > 0 && scores[0].score.toLocaleString()}</p>
      <p className="flex-1">{game.end?.toLocaleDateString()}</p>
    </div>
  )
}
export default LeagueBoard;
