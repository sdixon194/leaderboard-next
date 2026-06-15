"use client";
import Form from "next/form";
import { createLeague } from "./actions";
const NewLeagueForm = ({ ownerId }: { ownerId: string }) => {
  const createLeagueWithId = createLeague.bind(null, ownerId);
  return (
    <div>
      <Form action={createLeagueWithId}>
        <label htmlFor='leagueName'>League Name:
          <input type="text" id="leagueName" name="leagueName" placeholder="Enter league name" />
        </label>
        <button >Create League</button>
      </Form>
    </div >
  )
}
export default NewLeagueForm;
