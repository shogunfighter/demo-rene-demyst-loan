/*
  Warnings:

  - Made the column `name` on table `businessDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `businessDetail` MODIFY `name` VARCHAR(191) NOT NULL;
