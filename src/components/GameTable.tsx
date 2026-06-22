import SubmitScore from "./SubmitScore"

const GameTable() => {
  return (
    <div>
      <h2>Gameological League</h2>
      <h3>Pokemon Pinball: Ruby & Sapphire</h3>
      <h4>Ruby Table</h4>
      <table className="table-auto bg-white border border-gray-300">
        <thead className="bg-amber-400 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player 1</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Player 2</td>
            <td>1140</td>
          </tr>
        </tbody>
      </table>
      <SubmitScore />
    </div >
  )
}
