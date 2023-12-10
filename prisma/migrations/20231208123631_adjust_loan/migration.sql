-- DropForeignKey
ALTER TABLE `Loan` DROP FOREIGN KEY `Loan_accountId_fkey`;

-- DropForeignKey
ALTER TABLE `Loan` DROP FOREIGN KEY `Loan_businessDetailId_fkey`;

-- AlterTable
ALTER TABLE `Loan` MODIFY `accountId` INTEGER NULL DEFAULT 0,
    MODIFY `businessDetailId` INTEGER NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `AccountProvider`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_businessDetailId_fkey` FOREIGN KEY (`businessDetailId`) REFERENCES `BusinessDetail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
