import { Game, User } from "@/app/generated/prisma/client"
import GameBoard from "../GameBoard/GameBoard";

const GameList = ({ games, currentPlayer }: { games: Array<Game>, currentPlayer: User | null }) => {
  if (!games) {
    return (<p>No games found!</p>)
  }
  return (
    <div>
      {
        games.map((game) =>
          <GameBoard game={game} key={game.id} currentPlayer={currentPlayer} />
        )
      }
    </div>
  )
}
export default GameList;
