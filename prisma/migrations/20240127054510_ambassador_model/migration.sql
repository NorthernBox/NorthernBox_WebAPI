/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Ambassador" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT '',
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "community_experience" BOOLEAN NOT NULL,
    "role_community_experience" TEXT DEFAULT '',
    "areas_of_expertise" TEXT[],
    "skills" TEXT[],
    "info_source" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,

    CONSTRAINT "Ambassador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ambassador_email_key" ON "Ambassador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ambassador_phone_key" ON "Ambassador"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Members_email_key" ON "Members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Members_phone_key" ON "Members"("phone");
