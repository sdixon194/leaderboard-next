import { User } from "@/app/generated/prisma/client"

const PlayerList = ({ players }: { players: Array<User> }) => {
  return (
    <div className="p-5 rounded-sm bg-white drop-shadow-sm">
      <h3>League Players:</h3>
      <ul className="drop-shadow-sm bg-slate-100 p-2">{players.map(p => <li key={p.id}>{p.name}</li>)}</ul>
    </div>
  )
}
export default PlayerList;
