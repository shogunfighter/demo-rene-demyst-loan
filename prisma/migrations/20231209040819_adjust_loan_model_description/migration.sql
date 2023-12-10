/*
  Warnings:

  - Made the column `description` on table `loan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `loan` ADD COLUMN `amount` DOUBLE NULL DEFAULT 0,
    MODIFY `description` VARCHAR(191) NOT NULL;
