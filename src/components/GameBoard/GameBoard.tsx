"use server";
import SubmitScore from "@/components/SubmitScore";
import { Game } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import PlayerScore from "../PlayerScore/PlayerScore";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function GameBoard({ game }: { game: Game }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const beginTime = game.begin ?? null;
  const endTime = game.end ?? null;
  //console.log(Math.floor(game.begin.getTime() / 1000));

  const scores = await prisma.score.findMany({
    where: { gameId: game.id },
    distinct: ['playerId'],
    orderBy: {
      score: 'desc',
    },
    include: { player: true }
  })

  const players = await prisma.leaguePlayers.findMany({
    where: { leagueId: game.leagueId }
  });
  const isPlayer = players.some(p => p.userId === session?.user.id);

  return (
    <div className="border p-5 m-5 w-100">
      <h2>{game.name}</h2>
      <h3>{game.platform}</h3>
      {game.category && <h4>{game.category}</h4>}
      {endTime && <h5>Ends: {endTime.toLocaleString()}</h5>}
      <div className="border">
        <table className="table-auto">
          <thead >
            <tr>
              <th >Player</th>
              <th>Score</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {
              scores.map((score) =>
                <PlayerScore score={score.score} player={score.player.name} date={score.createdAt} key={score.id} />
              )
            }
          </tbody>
        </table>
      </div>
      {isPlayer && <SubmitScore gameId={game.id} />}
    </div>
  );
};
