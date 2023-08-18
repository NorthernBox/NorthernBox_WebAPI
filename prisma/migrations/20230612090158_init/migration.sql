-- CreateTable
CREATE TABLE "Mentees" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT '',
    "coding_experience" TEXT NOT NULL,
    "programming_languages" TEXT[],
    "projects" BOOLEAN NOT NULL DEFAULT false,
    "project_links" TEXT[],
    "areas_of_interest" TEXT[],
    "tech_framework_to_learn" TEXT[],
    "goals_objectives" TEXT NOT NULL,
    "achivement_target" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentees_email_key" ON "Mentees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentees_phone_key" ON "Mentees"("phone");
