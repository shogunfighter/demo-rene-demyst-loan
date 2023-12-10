/*
  Warnings:

  - Made the column `amount` on table `loan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `loan` MODIFY `amount` DOUBLE NOT NULL DEFAULT 0;
