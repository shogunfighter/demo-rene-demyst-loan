-- AlterTable
ALTER TABLE `Loan` ADD COLUMN `accountId` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `businessDetailId` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `AccountProvider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_businessDetailId_fkey` FOREIGN KEY (`businessDetailId`) REFERENCES `BusinessDetail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
