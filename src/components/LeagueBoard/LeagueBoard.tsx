import { Game, League } from "@/app/generated/prisma/client";
import GameBoard from "../GameBoard/GameBoard";
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
  const game = league.league.games[0];
  const url = `/leagues/${league.league.id}`;
  return (
    <div className="m-auto">
      <h2><Link href={url}>{league.league.name}</Link></h2>
      <GameBoard game={game} />
    </div >
  )
}
export default LeagueBoard;
