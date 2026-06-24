/*
  Warnings:

  - You are about to drop the column `updateAt` on the `game` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `league` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `league` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "game" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "league" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "score" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
