/*
  Warnings:

  - You are about to drop the column `metarials` on the `Recipes` table. All the data in the column will be lost.
  - Added the required column `materials` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipes"
RENAME COLUMN "metarials" TO "materials";
