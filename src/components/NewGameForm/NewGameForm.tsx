"use client";
import Form from "next/form";
import { createGame } from "./actions";
import { useState } from 'react';
import { League } from "@/app/generated/prisma/client"
const NewGameForm = ({ league }: { league: League }) => {

  const date = new Date();
  const weekDate = new Date(date);
  weekDate.setDate(weekDate.getDate() + (7));

  const [startDate, setStartDate] = useState(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`);
  const currentHour = date.getHours();
  const currentMins = date.getMinutes();
  const [defaultEndDate, setDefaultEndDate] = useState(`${weekDate.getFullYear()}-${('0' + (weekDate.getMonth() + 1)).slice(-2)}-${('0' + weekDate.getDate()).slice(-2)}`);
  const defaultEndHour = weekDate.getHours();
  const defaultEndMins = weekDate.getMinutes();

  return (
    <div className="drop-shadow-sm p-5 bg-white flex flex-col gap-2">
      <h3>Create New Game</h3>
      <Form action={createGame} className="flex flex-col gap-5">
        <div>
          <label htmlFor='gameName'>
            <input className="w-full" type="text" id="gameName" name="gameName" placeholder="Game Name" required />
          </label>
        </div>
        <div>
          <label htmlFor='platform'>
            <input className="w-full" type="text" id="platform" name="platform" placeholder="Platform (SNES, PC, etc)" required />
          </label>
        </div>
        <div>
          <label htmlFor='category'>
            <input className="w-full" type="text" id="category" name="category" placeholder="Category (Any%, etc)" />
          </label>
        </div>
        <div>
          <label htmlFor='startDate'>Start On:
            <input className="w-full" type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label htmlFor='startHour'>at:
            <select name="startHour" defaultValue={currentHour}>
              {[...Array(24)].map((item, i) => <option key={i} value={('0' + i.toString()).slice(-2)}>{('0' + i.toString()).slice(-2)}</option>)}
            </select>
          </label>
          <label htmlFor='startMinutes'>:
            <select name="startMinutes" defaultValue={currentMins}>
              {[...Array(59)].map((item, i) => <option key={i} value={('0' + i.toString()).slice(-2)}>{('0' + i.toString()).slice(-2)}</option>)}
            </select>
          </label>
        </div>
        <div >
          <label htmlFor='endDate'>End On:
            <input className="w-full" type="date" id="endDate" name="endDate" value={defaultEndDate} onChange={(e) => setDefaultEndDate(e.target.value)} />
          </label>
          <label htmlFor='endHour'>at:
            <select name="endHour" defaultValue={defaultEndHour}>
              {[...Array(24)].map((item, i) => <option key={i} value={('0' + i.toString()).slice(-2)}>{('0' + i.toString()).slice(-2)}</option>)}
            </select>
          </label>
          <label htmlFor='endMinutes'>:
            <select name="endMinutes" defaultValue={defaultEndMins}>
              {[...Array(59)].map((item, i) => <option key={i} value={('0' + i.toString()).slice(-2)}>{('0' + i.toString()).slice(-2)}</option>)}
            </select>
          </label>
        </div>
        <input type="hidden" id="tzOffset" name="tzOffset" value={date.getTimezoneOffset()} />
        <input type="hidden" id="leagueId" name="leagueId" value={league.id} />
        <div>
          <button className="w-full">Create Game</button>
        </div>
      </Form>
    </div >
  )
}
export default NewGameForm;

function processDate(date: Date) {
  return `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}
