import { Game, User, Score, Role } from "@/app/generated/prisma/client";
import GameBoard from "../GameBoard/GameBoard";

type ScoreType = Score & {
  player: User;
};
type GameType = Game & {
  scores: Array<ScoreType>;
};

const GameList = ({
  games,
  currentPlayer,
  role,
  players,
}: {
  games: Array<GameType>;
  currentPlayer: User | null;
  role: Role;
  players: Array<User>
}) => {
  if (!games) {
    return <p>No games found!</p>;
  }
  return (
    <div>
      {games.map((game) => (
        <GameBoard game={game} key={game.id} currentPlayer={currentPlayer} role={role} players={players} />
      ))}
    </div>
  );
};
export default GameList;
