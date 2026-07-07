import Form from "next/form"
import { sendInvite } from "./actions"

const InvitePlayer = ({ leagueId }: { leagueId: string }) => {
  return (
    <div className="p-5 m-5 rounded-sm bg-white drop-shadow-sm">
      <h3>Invite New Players</h3>
      <Form action={sendInvite}>
        <div>
          <label>Email:</label>
          <input className="m-2" type="email" name="email" id="email"></input>
          <button>Invite!</button>
        </div>
        <input type="hidden" name="leagueId" id="leagueId" value={leagueId} />
      </Form>
    </div>
  )
}
export default InvitePlayer
