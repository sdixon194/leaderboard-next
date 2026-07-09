import SubmitScore from "@/components/SubmitScore";
import { Game, Score, User } from "@/app/generated/prisma/client";
import PlayerScore from "../PlayerScore/PlayerScore";

type ScoreType = Score & {
  player: User
}
type GameType = Game & {
  scores: Array<ScoreType>
}
export default function GameBoard({ game, currentPlayer }: { game: GameType, currentPlayer: User | null }) {
  const endTime = game.end ?? null;
  const isFinished = endTime ? (Date.now() - endTime.getTime() >= 0) : false;

  return (
    <div className="border rounded-sm p-5 m-5 max-w-300">
      <h2><span>{game.name.toUpperCase()}</span><span className="text-2xl">({game.platform})</span></h2>
      <div className="flex flex-row">
        {game.category && <h4 className='flex-1 text-left content-center'>{game.category}</h4>}
        {endTime && <p className='flex-1 text-right content-center'>Ends: {endTime.toLocaleString()}</p>}
      </div>
      <div className="rounded-sm p-2 drop-shadow-md">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th><p className="text-left">Player</p></th>
              <th><p className="text-left">Score</p></th>
              <th><p className="text-left">Date Submitted</p></th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-slate-100 [&>*:nth-child(even)]:bg-blue-100">
            {
              game.scores.map((score) =>
                <PlayerScore score={score.score} player={score.player.name} date={score.createdAt} key={score.id} />
              )
            }
          </tbody>
        </table>
      </div >
      {currentPlayer && !isFinished && <SubmitScore gameId={game.id} user={currentPlayer} />
      }
    </div >
  );
};
