import { User } from "@/app/generated/prisma/client"

const PlayerList = ({ players }: { players: Array<User> }) => {
  return (
    <div className="border w-100 p-5 m-5">
      <h3>League Players:</h3>
      <ul>{players.map(p => <li key={p.id}>{p.name}</li>)}</ul>
    </div>
  )
}
export default PlayerList;
