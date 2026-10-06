'use client'
import { User, Role } from "@/app/generated/prisma/client";
import Form from "next/form";
import { useState } from "react";
import { submitScore } from './actions';
import { usePathname } from 'next/navigation';

const SubmitScore = ({ gameId, user, role, players }: { gameId: string, user: User, role: Role, players: Array<User> }) => {
  const pathName = usePathname();
  const [score, setScore] = useState('')
  const [playerId, setPlayerId] = useState(user.id)
  const isAdmin = (role === 'ADMIN' || role === 'OWNER') ? true : false;

  const handleScoreChange = (value: string) => {
    setScore(value)
  }

  return (
    <div className="m-2">
      <Form action={submitScore}>
        <input className="bg-slate-100 border" id="score" name="score" type="text" value={score} placeholder="New Score" onChange={(e) => handleScoreChange(e.target.value)} required />
        {isAdmin &&
          <select className="bg-slate-100 border rounded-sm m-2 p-2" id="selectedPlayer" defaultValue={user.id} onChange={(e) => setPlayerId(e.target.value)}>
            {players.map((player) => <option value={player.id} key={player.id}>{player.name === user.name ? `${player.name} (Me!)` : player.name}</option>)}
          </select>
        }
        <input type='hidden' id='gameId' name='gameId' value={gameId} />
        <input type='hidden' id='playerId' name='playerId' value={playerId} />
        <input type='hidden' id='path' name='path' value={pathName} />
        <button className="border m-2 p-2 rounded-sm">Submit</button>
      </Form>
    </div >
  )
}
export default SubmitScore;
