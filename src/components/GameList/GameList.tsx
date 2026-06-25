import { Game } from "@/app/generated/prisma/client"
import GameBoard from "../GameBoard/GameBoard";

const GameList = ({ games }: { games: Array<Game> }) => {
  if (!games) {
    return (<p>No games found!</p>)
  }
  return (
    <div>
      {
        games.map((game) =>
          <GameBoard game={game} key={game.id} />
        )
      }
    </div>
  )
}
export default GameList;
