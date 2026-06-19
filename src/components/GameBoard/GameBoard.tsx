"use client";
import SubmitScore from "@/components/SubmitScore";
import { Game } from "@/generated/prisma/client";

const GameBoard = ({ game }: { game: Game }) => {
  const beginTime = game.begin ?? null;
  const endTime = game.end ?? null;
  //console.log(Math.floor(game.begin.getTime() / 1000));
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
            <td>Player 1</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Player 2</td>
            <td>1140</td>
          </tr>
        </tbody>
      </table>
      <SubmitScore />
    </div>
  );
};
export default GameBoard;
