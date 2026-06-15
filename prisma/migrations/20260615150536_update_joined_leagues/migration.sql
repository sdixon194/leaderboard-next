/*
  Warnings:

  - You are about to drop the `_JoinedLeagues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JoinedLeagues" DROP CONSTRAINT "_JoinedLeagues_A_fkey";

-- DropForeignKey
ALTER TABLE "_JoinedLeagues" DROP CONSTRAINT "_JoinedLeagues_B_fkey";

-- DropTable
DROP TABLE "_JoinedLeagues";

-- CreateTable
CREATE TABLE "_Players" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Players_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Players_B_index" ON "_Players"("B");

-- AddForeignKey
ALTER TABLE "_Players" ADD CONSTRAINT "_Players_A_fkey" FOREIGN KEY ("A") REFERENCES "league"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Players" ADD CONSTRAINT "_Players_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
