import { Game, User, Score } from "@/app/generated/prisma/client"
import GameBoard from "../GameBoard/GameBoard";

type ScoreType = Score & {
  player: User
}
type GameType = Game & {
  scores: Array<ScoreType>
}

const GameList = ({ games, currentPlayer }: { games: Array<GameType>, currentPlayer: User | null }) => {
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
