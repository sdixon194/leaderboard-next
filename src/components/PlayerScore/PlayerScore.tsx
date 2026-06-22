import { Score } from "@/app/generated/prisma/client"

const PlayerScore = (score: Score) => {
  return (
    <tr>
      <td>{score.playerId}</td>
      <td>{score.score}</td>
    </tr>);
}

export default PlayerScore;
