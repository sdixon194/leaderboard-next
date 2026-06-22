"use server";
import SubmitScore from "@/components/SubmitScore";
import { Game } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export default async function GameBoard({ game }: { game: Game }) {
  const beginTime = game.begin ?? null;
  const endTime = game.end ?? null;
  //console.log(Math.floor(game.begin.getTime() / 1000));
  const scores = await prisma.score.findMany({
    where:
      { gameId: game.id }
  });
  return (
    <div>
      <h2>{game.name}</h2>
      <h3>{game.platform}</h3>
      {game.category && <h4>{game.category}</h4>}
      {endTime && <h5>Ends: {endTime.toLocaleString()}</h5>}
      <table className="table-auto bg-white border border-gray-300">
        <thead className="bg-amber-400 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player 2</td>
            <td>1140</td>
          </tr>
        </tbody>
      </table>
      {<SubmitScore gameId={game.id} />}
    </div>
  );
};
