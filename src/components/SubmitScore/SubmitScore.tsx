'use client'
import Form from "next/form";
import { useState } from "react";
import { submitScore } from './actions';
import { useSession } from "@/lib/auth-client";
import { usePathname } from 'next/navigation';

const SubmitScore = ({ gameId }: { gameId: string }) => {
  const pathName = usePathname();
  const [score, setScore] = useState('')
  const { data: session } = useSession();

  if (!session?.user)
    return <p className="text-center mt-8">Sign in to Submit Score</p>;

  const { user } = session;

  const handleScoreChange = (value: string) => {
    setScore(value)
  }

  return (
    <div>
      <Form action={submitScore}>
        <label>New Score:
          <input id="score" name="score" type="text" value={score} onChange={(e) => handleScoreChange(e.target.value)} />
        </label>
        <input type='hidden' id='gameId' name='gameId' value={gameId} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <input type='hidden' id='playerId' name='playerId' value={user.id} />
        <input type='hidden' id='path' name='path' value={pathName} />
        <button>Submit</button>
      </Form>
    </div >
  )
}
export default SubmitScore;
