'use client'
import { useState } from 'react';
import Form from "next/form";
import { submitScore } from './actions';

const SubmitScore = () => {
  const [score, onScoreChange] = useState('')

  const handleScoreChange = (value: string) => {
    onScoreChange(value)
  }

  const handleNewScoreSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("I have submitted the score: " + score)
  }

  return (
    <div>
      <Form onSubmit={submitScore}>
        <label>New Score:
          <input id="score" name="score" type="text" value={score} onChange={(e) => handleScoreChange(e.target.value)} />
        </label>
        <button >Submit</button>
      </form>
    </div >
  )
}
export default SubmitScore;
