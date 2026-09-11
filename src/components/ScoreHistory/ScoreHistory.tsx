import { Score, User } from "@/app/generated/prisma/client";
import PlayerScore from "@/components/PlayerScore/PlayerScore";

export default function ScoreHistory({
  scores,
  currentPlayer,
}: {
  scores: Array<Score>;
  currentPlayer: User | null;
}) {
  return (
    <div className="border rounded-sm p-5 m-5 max-w-300">
      <h2>Score History</h2>
      <div className="rounded-sm p-2 drop-shadow-md">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th>
                <p className="text-left">Player</p>
              </th>
              <th>
                <p className="text-left">Score</p>
              </th>
              <th>
                <p className="text-left">Date Submitted</p>
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-slate-100 [&>*:nth-child(even)]:bg-blue-100">
            {scores.map((score) => (
              <PlayerScore
                score={score.score}
                player={score.player.name}
                date={score.createdAt}
                key={score.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
