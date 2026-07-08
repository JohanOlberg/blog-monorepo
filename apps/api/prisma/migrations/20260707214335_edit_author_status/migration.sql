/*
  Warnings:

  - The values [ACTIVE,INACTIVE,BLOCKED] on the enum `AuthorStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthorStatus_new" AS ENUM ('ACTIVATE', 'DEACTIVATE', 'BLOCK');
ALTER TABLE "public"."Author" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Author" ALTER COLUMN "status" TYPE "AuthorStatus_new" USING ("status"::text::"AuthorStatus_new");
ALTER TYPE "AuthorStatus" RENAME TO "AuthorStatus_old";
ALTER TYPE "AuthorStatus_new" RENAME TO "AuthorStatus";
DROP TYPE "public"."AuthorStatus_old";
ALTER TABLE "Author" ALTER COLUMN "status" SET DEFAULT 'ACTIVATE';
COMMIT;

-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "status" SET DEFAULT 'ACTIVATE';
