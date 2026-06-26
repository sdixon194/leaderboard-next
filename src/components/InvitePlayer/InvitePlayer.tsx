import Form from "next/form"
import { sendInvite } from "./actions"

const InvitePlayer = ({ leagueId }: { leagueId: string }) => {
  return (
    <div className="border w-100 p-5 m-5">
      <h3>Invite New Players</h3>
      <Form action={sendInvite}>
        <div>
          <label>Player Email:</label>
          <input type="email" name="email" id="email"></input>
          <button>Invite!</button>
        </div>
        <input type="hidden" name="leagueId" id="leagueId" value={leagueId} />
      </Form>
    </div>
  )
}
export default InvitePlayer
