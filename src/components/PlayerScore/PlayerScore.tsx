
const PlayerScore = ({ score, player, date }: { score: number, player: string, date: Date }) => {
  const submittedOn = date.toLocaleDateString();
  return (
    <tr>
      <td>{player}</td>
      <td>{score.toString()}</td>
      <td>{submittedOn}</td>
    </tr >);
}

export default PlayerScore;
