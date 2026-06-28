-- CreateEnum
CREATE TYPE "AuthorStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "status" "AuthorStatus" NOT NULL DEFAULT 'INACTIVE';
