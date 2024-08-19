-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "birthDate" TIMESTAMP(3),
    "searchFields" JSONB,
    "email" TEXT NOT NULL,
    "country" TEXT,
    "private_key" TEXT,
    "hedera_account_id" TEXT,
    "experience" TEXT,
    "password" TEXT,
    "languages" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistProfile" (
    "id" SERIAL NOT NULL,
    "audios" BYTEA NOT NULL,
    "messages" TEXT NOT NULL,
    "photos" BYTEA NOT NULL,
    "videos" BYTEA NOT NULL,
    "writing" TEXT NOT NULL,

    CONSTRAINT "ArtistProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentHunter" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,

    CONSTRAINT "TalentHunter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "starts" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "ends" TIMESTAMP(3) NOT NULL,
    "fundingGoal" DECIMAL(65,30) NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
