import { User, LeagueRole, Role } from "@/app/generated/prisma/client"

type UserType = User & {
  leagueRoles: Array<{ role: Role }>
}

const UserInfo = ({ player }: { player: UserType }) => {
  return (
    <div className="p-5 rounded-sm bg-white drop-shadow-sm">
      <h3>{`Welcome, ${player.name}!`}</h3>
    </div>)
}

export default UserInfo;
