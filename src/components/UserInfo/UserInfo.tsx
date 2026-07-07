import { User } from "@/app/generated/prisma/client"

const UserInfo = ({ player }: { player: User }) => {
  console.log(player);
  return (
    <div className="p-5 rounded-sm bg-white drop-shadow-sm">
      <h3>{`Welcome, ${player.name}!`}</h3>
    </div>)
}

export default UserInfo;
