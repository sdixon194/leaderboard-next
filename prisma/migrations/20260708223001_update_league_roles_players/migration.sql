/*
  Warnings:

  - You are about to drop the `users_on_leagues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users_on_leagues" DROP CONSTRAINT "users_on_leagues_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "users_on_leagues" DROP CONSTRAINT "users_on_leagues_userId_fkey";

-- DropTable
DROP TABLE "users_on_leagues";

-- CreateTable
CREATE TABLE "LeagueRole" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "LeagueRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LeagueToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_LeagueToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_LeagueToUser_B_index" ON "_LeagueToUser"("B");

-- AddForeignKey
ALTER TABLE "LeagueRole" ADD CONSTRAINT "LeagueRole_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeagueRole" ADD CONSTRAINT "LeagueRole_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "league"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LeagueToUser" ADD CONSTRAINT "_LeagueToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "league"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LeagueToUser" ADD CONSTRAINT "_LeagueToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
