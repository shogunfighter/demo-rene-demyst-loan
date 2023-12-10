/*
  Warnings:

  - You are about to drop the column `yearEstablish` on the `BusinessDetail` table. All the data in the column will be lost.
  - Added the required column `year` to the `BusinessDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BusinessDetail` DROP COLUMN `yearEstablish`,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `LoanApplication` ADD COLUMN `description` VARCHAR(191) NULL;
