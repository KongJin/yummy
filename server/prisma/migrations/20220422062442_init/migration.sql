/*
  Warnings:

  - You are about to drop the column `nickname` on the `Users` table. All the data in the column will be lost.
  - Added the required column `nickName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "nickname",
ADD COLUMN     "nickName" TEXT NOT NULL;
