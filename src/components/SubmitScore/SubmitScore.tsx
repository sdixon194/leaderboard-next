'use client'
import { User, Role } from "@/app/generated/prisma/client";
import Form from "next/form";
import { useState } from "react";
import { submitScore } from './actions';
import { usePathname } from 'next/navigation';

const SubmitScore = ({ gameId, user, role, players }: { gameId: string, user: User, role: Role, players: Array<User> }) => {
  const pathName = usePathname();
  const [score, setScore] = useState('')

  const handleScoreChange = (value: string) => {
    setScore(value)
  }
  const isAdmin = (role === 'ADMIN' || role === 'OWNER') ? true : false;
  console.log(players);
  return (
    <div className="m-2">
      <Form action={submitScore}>
        <input className="bg-slate-100 border" id="score" name="score" type="text" value={score} placeholder="New Score" onChange={(e) => handleScoreChange(e.target.value)} required />
        <select className="bg-slate-100 border rounded-sm m-2 p-2" id="selectedPlayer" defaultValue='ADnZIswUDZ25sDc2U4jfdRmn2uRNL8lB'>
          {players.map((player) => <option value={player.id} key={player.id}>{player.name}</option>)}
        </select>
        <input type='hidden' id='gameId' name='gameId' value={gameId} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <input type='hidden' id='path' name='path' value={pathName} />
        <button className="border m-2 p-2 rounded-sm">Submit</button>
      </Form>
    </div >
  )
}
export default SubmitScore;
