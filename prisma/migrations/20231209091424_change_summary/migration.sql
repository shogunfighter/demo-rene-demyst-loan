/*
  Warnings:

  - Made the column `summary` on table `businessDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `businessDetail` MODIFY `summary` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `loan` MODIFY `accountId` INTEGER NOT NULL DEFAULT -1,
    MODIFY `businessDetailId` INTEGER NOT NULL DEFAULT -1;
