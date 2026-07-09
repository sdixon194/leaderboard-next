'use client'
import { User } from "@/app/generated/prisma/client";
import Form from "next/form";
import { useState } from "react";
import { submitScore } from './actions';
import { usePathname } from 'next/navigation';

const SubmitScore = ({ gameId, user }: { gameId: string, user: User }) => {
  const pathName = usePathname();
  const [score, setScore] = useState('')

  const handleScoreChange = (value: string) => {
    setScore(value)
  }

  return (
    <div className="m-2">
      <Form action={submitScore}>
        <label>New Score:
          <input className="bg-slate-100 border" id=" score" name="score" type="text" value={score} onChange={(e) => handleScoreChange(e.target.value)} />
        </label>
        <input type='hidden' id='gameId' name='gameId' value={gameId} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <input type='hidden' id='path' name='path' value={pathName} />
        <button className="border m-2 p-2 rounded-sm">Submit</button>
      </Form>
    </div >
  )
}
export default SubmitScore;
