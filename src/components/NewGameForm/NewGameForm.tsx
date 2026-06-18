
"use client";
import Form from "next/form";
import { createGame } from "./actions";
import { useState } from 'react';
const NewGameForm = ({ leagueId }: { ownerId: string, leagueId: string }) => {
  const createGameWithId = createGame.bind(null, leagueId);
  const date = new Date();
  const weekDate = new Date(date);
  weekDate.setDate(weekDate.getDate() + (7));
  const [currentFullDate, setCurrentDate] = useState(`${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)}`);
  const [currentHour, setCurrentHour] = useState(date.getHours());
  const [currentMins, setCurrentMins] = useState(date.getMinutes());
  const [defaultEndDate, setDefaultEndDate] = useState(`${weekDate.getFullYear()}-${('0' + weekDate.getMonth()).slice(-2)}-${('0' + weekDate.getDate()).slice(-2)}`);
  const [defaultEndHour, setDefaultEndHour] = useState(weekDate.getHours());
  const [defaultEndMins, setDefaultEndMins] = useState(weekDate.getMinutes());

  console.log(currentFullDate);
  return (
    <div>
      <Form action={createGameWithId}>
        <div>
          <label htmlFor='gameName'>Game Name:
            <input type="text" id="gameName" name="gameName" placeholder="Joust.." />
          </label>
        </div>
        <div>
          <label htmlFor='platform'>Platform:
            <input type="text" id="platform" name="platform" placeholder="Atari 2600..." />
          </label>
        </div>
        <div>
          <label htmlFor='startDate'>Start On:
            <input type="date" id="startDate" name="startDate" value={currentFullDate} />
          </label>
          <label htmlFor='startTimeHour'>at:
            <select name="startTimeHour" defaultValue={currentHour}>
              {[...Array(12)].map((item, i) => <option value={i + 1}>{i + 1}</option>)}
            </select>
          </label>
          <label htmlFor='startTimeMinutes'>:
            <select name="startTimeMinutes" defaultValue={currentMins}>
              {[...Array(59)].map((item, i) => <option value={i}>{i}</option>)}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor='endDate'>End On:
            <input type="date" id="endDate" name="endDate" value={defaultEndDate} />
          </label>
          <label htmlFor='endTimeHour'>at:
            <select name="endTimeHour" defaultValue={defaultEndHour}>
              {[...Array(12)].map((item, i) => <option value={i + 1}>{i + 1}</option>)}
            </select>
          </label>
          <label htmlFor='endTimeMinutes'>:
            <select name="endTimeMinutes" defaultValue={defaultEndMins}>
              {[...Array(59)].map((item, i) => <option value={i}>{i}</option>)}
            </select>
          </label>
        </div>
        <div>
          <button >Create Game</button>
        </div>
      </Form>
    </div >
  )
}
export default NewGameForm;
