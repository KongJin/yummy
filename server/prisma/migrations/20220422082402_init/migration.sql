/*
  Warnings:

  - You are about to drop the `Metarials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Metarials";

-- CreateTable
CREATE TABLE "Materials" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Materials_pkey" PRIMARY KEY ("id")
);
