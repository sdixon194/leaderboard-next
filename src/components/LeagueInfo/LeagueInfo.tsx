import { League, Role, User } from "@/app/generated/prisma/client";
import NewGameForm from "@/components/NewGameForm/NewGameForm";
import InvitePlayer from "@/components/InvitePlayer/InvitePlayer";
import PlayerList from "@/components/PlayerList/PlayerList";

const LeagueInfo = ({ league, players, role }: { league: League, players: Array<User>, role: Role }) => {
  const isAdmin = role === 'ADMIN' || 'OWNER';
  return (
    <div className="flex flex-col gap-5">
      <PlayerList players={players} />
      {isAdmin && <NewGameForm league={league} />}
      {isAdmin && <InvitePlayer leagueId={league.id} />}
    </div>
  )
}

export default LeagueInfo;
