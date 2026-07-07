"use client";
import Form from "next/form";
import { createLeague } from "./actions";
const NewLeagueForm = ({ ownerId }: { ownerId: string }) => {
  const createLeagueWithId = createLeague.bind(null, ownerId);
  return (
    <div>
      <Form action={createLeagueWithId} className="flex flex-col gap-2">
        <label htmlFor='leagueName' className='w-full'>
          <input type="text" id="leagueName" name="leagueName" placeholder="Enter league name" className='w-full' />
        </label>
        <button className="hover:bg-amber-50">Create League</button>
      </Form>
    </div >
  )
}
export default NewLeagueForm;
