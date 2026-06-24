/*
  Warnings:

  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_leagueId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_userId_fkey";

-- DropTable
DROP TABLE "player";

-- CreateTable
CREATE TABLE "league_players" (
    "leagueId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PLAYER',

    CONSTRAINT "league_players_pkey" PRIMARY KEY ("userId","leagueId")
);

-- AddForeignKey
ALTER TABLE "league_players" ADD CONSTRAINT "league_players_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "league"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "league_players" ADD CONSTRAINT "league_players_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
