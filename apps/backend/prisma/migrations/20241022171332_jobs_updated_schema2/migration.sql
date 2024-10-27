/*
  Warnings:

  - You are about to drop the column `application_type` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `application_url` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `applies` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `closed_time` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `compensation_type` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `expiry` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `fip` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `formatted_experience_level` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `listed_time` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `med_salary` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `min_salary` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `normalized_salary` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `original_listed_time` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `pay_period` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `posting_domain` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `remote_allowed` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `skills_desc` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `sponsored` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `work_type` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `zip_codes` on the `jobs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "jobs_company_id_key";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "application_type",
DROP COLUMN "application_url",
DROP COLUMN "applies",
DROP COLUMN "closed_time",
DROP COLUMN "company_id",
DROP COLUMN "compensation_type",
DROP COLUMN "description",
DROP COLUMN "expiry",
DROP COLUMN "fip",
DROP COLUMN "formatted_experience_level",
DROP COLUMN "listed_time",
DROP COLUMN "med_salary",
DROP COLUMN "min_salary",
DROP COLUMN "normalized_salary",
DROP COLUMN "original_listed_time",
DROP COLUMN "pay_period",
DROP COLUMN "posting_domain",
DROP COLUMN "remote_allowed",
DROP COLUMN "skills_desc",
DROP COLUMN "sponsored",
DROP COLUMN "views",
DROP COLUMN "work_type",
DROP COLUMN "zip_codes",
ALTER COLUMN "company_name" SET DEFAULT 'ABC',
ALTER COLUMN "currency" SET DEFAULT 'NULL';
