-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllSports" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "sportsId" TEXT NOT NULL,

    CONSTRAINT "AllSports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sports" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sports_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AllSports" ADD CONSTRAINT "AllSports_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllSports" ADD CONSTRAINT "AllSports_sportsId_fkey" FOREIGN KEY ("sportsId") REFERENCES "Sports"("id") ON DELETE CASCADE ON UPDATE CASCADE;
