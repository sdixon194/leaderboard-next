'use client'
import { useState } from 'react';
import Form from "next/form";
import { submitScore } from './actions';
import { useSession, signOut } from "@/lib/auth-client";

const SubmitScore = ({ gameId }: { gameId: string }) => {
  const [score, onScoreChange] = useState('')
  const { data: session } = useSession();

  if (!session?.user)
    return <p className="text-center mt-8">Sign in to Submit Score</p>;

  const { user } = session;

  const handleScoreChange = (value: string) => {
    onScoreChange(value)
  }

  return (
    <div>
      <Form action={submitScore}>
        <label>New Score:
          <input id="score" name="score" type="text" value={score} onChange={(e) => handleScoreChange(e.target.value)} />
        </label>
        <input type='hidden' id='gameId' name='gameId' value={gameId} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <button >Submit</button>
      </Form>
    </div >
  )
}
export default SubmitScore;
