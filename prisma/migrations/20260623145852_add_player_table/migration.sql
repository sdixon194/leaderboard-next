/*
  Warnings:

  - You are about to drop the `_Players` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'PLAYER');

-- DropForeignKey
ALTER TABLE "_Players" DROP CONSTRAINT "_Players_A_fkey";

-- DropForeignKey
ALTER TABLE "_Players" DROP CONSTRAINT "_Players_B_fkey";

-- DropTable
DROP TABLE "_Players";

-- CreateTable
CREATE TABLE "player" (
    "leagueId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PLAYER',

    CONSTRAINT "player_pkey" PRIMARY KEY ("userId","leagueId")
);

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "league"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
