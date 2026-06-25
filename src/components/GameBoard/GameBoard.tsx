"use server";
import SubmitScore from "@/components/SubmitScore";
import { Game } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import PlayerScore from "../PlayerScore/PlayerScore";

export default async function GameBoard({ game }: { game: Game }) {
  console.log(game);
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
  return (
    <div>
      <h2>{game.name}</h2>
      <h3>{game.platform}</h3>
      {game.category && <h4>{game.category}</h4>}
      {endTime && <h5>Ends: {endTime.toLocaleString()}</h5>}
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Player</th>
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
      {<SubmitScore gameId={game.id} />}
    </div>
  );
};
