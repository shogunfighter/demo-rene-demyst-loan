/*
  Warnings:

  - You are about to drop the column `accountId` on the `loan` table. All the data in the column will be lost.
  - Made the column `name` on table `accountProvider` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `loan` DROP FOREIGN KEY `loan_accountId_fkey`;

-- AlterTable
ALTER TABLE `accountProvider` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `loan` DROP COLUMN `accountId`,
    ADD COLUMN `accountProviderId` INTEGER NOT NULL DEFAULT -1;

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `loan` ADD CONSTRAINT `loan_accountProviderId_fkey` FOREIGN KEY (`accountProviderId`) REFERENCES `accountProvider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
