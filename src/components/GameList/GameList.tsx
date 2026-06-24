import { Game } from "@/app/generated/prisma/client"
import GameBoard from "../GameBoard/GameBoard";

const GameList = ({ games, leagueId }: { games: Array<Game>, leagueId: string }) => {
  if (!games) {
    return (<p>No games found!</p>)
  }
  return (
    <div>
      {
        games.map((game) =>
          <GameBoard game={game} key={game.id} leagueId={leagueId} />
        )
      }
    </div>
  )
}
export default GameList;
