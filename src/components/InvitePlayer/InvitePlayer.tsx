import Form from "next/form"
import { sendInvite } from "./actions"

const InvitePlayer = ({ leagueId }: { leagueId: string }) => {
  return (
    <div className="p-5 rounded-sm bg-white drop-shadow-sm">
      <h3>Invite New Players</h3>
      <Form action={sendInvite} className="flex flex-col gap-5">
        <label>
          <input className="w-full" type="email" name="email" id="email" placeholder="Email"></input>
        </label>
        <button>Invite!</button>
        <input type="hidden" name="leagueId" id="leagueId" value={leagueId} />
      </Form>
    </div>
  )
}
export default InvitePlayer
