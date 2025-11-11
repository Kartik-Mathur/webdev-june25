-- CreateTable
CREATE TABLE "Student" (
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "email" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
