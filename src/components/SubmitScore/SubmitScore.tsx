'use client'
import { useState } from 'react';

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
      <form onSubmit={handleNewScoreSubmit}>
        <label>New Score:
          <input type="text" value={score} onChange={(e) => handleScoreChange(e.target.value)} />
        </label>
        <button >Submit</button>
      </form>
    </div >
  )
}
export default SubmitScore;
