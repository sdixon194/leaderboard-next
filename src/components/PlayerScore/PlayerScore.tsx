
const PlayerScore = ({ score, player, date }: { score: number, player: string, date: Date }) => {
  const submittedOn = date.toLocaleDateString();
  return (
    <tr >
      <td className="p-2"><p>{player}</p></td>
      <td><p>{score.toLocaleString()}</p></td>
      <td><p>{submittedOn}</p></td>
    </tr >);
}

export default PlayerScore;
