"use client";
import Form from "next/form";
import { createGame } from "./actions";
import { useState } from 'react';
import { useSession } from "@/lib/auth-client";
import { League } from "@/app/generated/prisma/client"
const NewGameForm = ({ ownerId, league }: { ownerId: string, league: League }) => {

  const date = new Date();
  const weekDate = new Date(date);
  weekDate.setDate(weekDate.getDate() + (7));

  const [startDate, setStartDate] = useState(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`);
  const currentHour = date.getHours();
  const currentMins = date.getMinutes();
  const [defaultEndDate, setDefaultEndDate] = useState(`${weekDate.getFullYear()}-${('0' + (weekDate.getMonth() + 1)).slice(-2)}-${('0' + weekDate.getDate()).slice(-2)}`);
  const defaultEndHour = weekDate.getHours();
  const defaultEndMins = weekDate.getMinutes();

  const { data: session } = useSession();

  if (!session?.user)
    return <p className="text-center mt-8">Sign in to create game</p>;

  const { user } = session;
  if (user.id !== league.ownerId) {
    return <></>
  }

  return (
    <div>
      <Form action={createGame}>
        <div>
          <label htmlFor='gameName'>Game Name:
            <input type="text" id="gameName" name="gameName" placeholder="Joust.." required />
          </label>
        </div>
        <div>
          <label htmlFor='platform'>Platform:
            <input type="text" id="platform" name="platform" placeholder="Atari 2600..." required />
          </label>
        </div>
        <div>
          <label htmlFor='category'>Category:
            <input type="text" id="category" name="category" placeholder="Any%..." />
          </label>
        </div>
        <div>
          <label htmlFor='startDate'>Start On:
            <input type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
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
        <div>
          <label htmlFor='endDate'>End On:
            <input type="date" id="endDate" name="endDate" value={defaultEndDate} onChange={(e) => setDefaultEndDate(e.target.value)} />
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
          <button >Create Game</button>
        </div>
      </Form>
    </div >
  )
}
export default NewGameForm;

function processDate(date: Date) {
  return `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}
