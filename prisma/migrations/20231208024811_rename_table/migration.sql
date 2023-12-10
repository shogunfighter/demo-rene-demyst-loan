/*
  Warnings:

  - You are about to drop the `LoanApplication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `LoanApplication`;

-- CreateTable
CREATE TABLE `Loan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` INTEGER NOT NULL DEFAULT 0,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
