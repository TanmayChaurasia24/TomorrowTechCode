-- CreateTable
CREATE TABLE "jobs" (
    "job_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "max_salary" DOUBLE PRECISION NOT NULL,
    "pay_period" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company_id" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "med_salary" DOUBLE PRECISION NOT NULL,
    "min_salary" DOUBLE PRECISION NOT NULL,
    "formatted_work" TEXT NOT NULL,
    "applies" INTEGER NOT NULL,
    "original_listed_time" DOUBLE PRECISION NOT NULL,
    "remote_allowed" BOOLEAN NOT NULL,
    "job_posting_url" TEXT NOT NULL,
    "application_url" TEXT NOT NULL,
    "application_type" TEXT NOT NULL,
    "expiry" DOUBLE PRECISION NOT NULL,
    "closed_time" TEXT NOT NULL,
    "formatted_experience_level" TEXT NOT NULL,
    "skills_desc" TEXT NOT NULL,
    "listed_time" DOUBLE PRECISION NOT NULL,
    "posting_domain" TEXT NOT NULL,
    "sponsored" INTEGER NOT NULL,
    "work_type" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "compensation_type" TEXT NOT NULL,
    "normalized_salary" DOUBLE PRECISION NOT NULL,
    "zip_codes" INTEGER NOT NULL,
    "fip" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("job_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_company_id_key" ON "jobs"("company_id");
