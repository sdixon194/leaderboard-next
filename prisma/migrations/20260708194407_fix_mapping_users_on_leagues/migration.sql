/*
  Warnings:

  - You are about to drop the `league_players` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "league_players" DROP CONSTRAINT "league_players_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "league_players" DROP CONSTRAINT "league_players_userId_fkey";

-- DropTable
DROP TABLE "league_players";

-- CreateTable
CREATE TABLE "users_on_leagues" (
    "leagueId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PLAYER',

    CONSTRAINT "users_on_leagues_pkey" PRIMARY KEY ("userId","leagueId")
);

-- AddForeignKey
ALTER TABLE "users_on_leagues" ADD CONSTRAINT "users_on_leagues_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "league"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_leagues" ADD CONSTRAINT "users_on_leagues_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
