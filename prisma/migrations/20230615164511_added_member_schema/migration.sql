-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "based_location" TEXT NOT NULL,
    "education_level" TEXT NOT NULL,
    "field_of_study" TEXT[],
    "employed_status" BOOLEAN NOT NULL DEFAULT false,
    "job_title" TEXT,
    "skills" TEXT[],
    "interests" TEXT[],
    "joining_reason" TEXT NOT NULL,
    "other_info" TEXT,
    "consent" BOOLEAN NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_email_key" ON "Members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Members_phone_key" ON "Members"("phone");
