/*
  Warnings:

  - The `original_listed_time` column on the `jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `expiry` column on the `jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `closed_time` column on the `jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `listed_time` column on the `jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "original_listed_time",
ADD COLUMN     "original_listed_time" TIMESTAMP(3),
DROP COLUMN "expiry",
ADD COLUMN     "expiry" TIMESTAMP(3),
DROP COLUMN "closed_time",
ADD COLUMN     "closed_time" TIMESTAMP(3),
DROP COLUMN "listed_time",
ADD COLUMN     "listed_time" TIMESTAMP(3),
ALTER COLUMN "zip_codes" SET DATA TYPE TEXT,
ALTER COLUMN "fip" SET DATA TYPE TEXT;
