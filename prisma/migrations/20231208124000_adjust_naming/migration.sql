/*
  Warnings:

  - You are about to drop the `AccountProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BusinessDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Loan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Loan` DROP FOREIGN KEY `Loan_accountId_fkey`;

-- DropForeignKey
ALTER TABLE `Loan` DROP FOREIGN KEY `Loan_businessDetailId_fkey`;

-- DropTable
DROP TABLE `AccountProvider`;

-- DropTable
DROP TABLE `BusinessDetail`;

-- DropTable
DROP TABLE `Loan`;

-- CreateTable
CREATE TABLE `loan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` INTEGER NOT NULL DEFAULT 0,
    `description` VARCHAR(191) NULL,
    `accountId` INTEGER NOT NULL DEFAULT 0,
    `businessDetailId` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accountProvider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `businessDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `year` INTEGER NOT NULL,
    `summary` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `loan` ADD CONSTRAINT `loan_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `accountProvider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `loan` ADD CONSTRAINT `loan_businessDetailId_fkey` FOREIGN KEY (`businessDetailId`) REFERENCES `businessDetail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
