import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Pre assessment calc
 * @param loanAmount 
 * @param profits 
 * @param assets 
 * @returns 
 * 
 * Example usage:
 * const loanAmount = 50000;
 * const profitsLast12Months = [10000, 15000, 20000, 5000, 8000, 12000, 10000, 15000, 20000, 5000, 8000, 12000];
 * const assetsLast12Months = [60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000];
 * 
 * const preAssessmentValue = calculatePreAssessment(loanAmount, profitsLast12Months, assetsLast12Months);
 * console.log(`preAssessment: ${preAssessmentValue}`);
 */
export function calculatePreAssessment(loanAmount: number, profits: number[], assets: number[]) {

  // Doubt????? Why did the sample in the description gave non-12 month records balance sheet but mentions to check for the last 12 months of profit/assets?

  // Calculate the average profit over the last 12 months

  const profitTotal = profits.reduce((sum, profit) => sum + profit, 0);
  const profitAverage = profitTotal / profits.length;

  // Check if the business has made a profit in the last 12 months
  const profitted = profitAverage > 0;

  // Check if the average asset value is greater than the loan amount
  const assetTotal = assets.reduce((sum, asset) => sum + asset, 0);
  const assetAverage = assetTotal / assets.length;

  const assetAverageGreaterThanLoan = assetAverage > loanAmount;

  // Determine the preAssessment value based on conditions
  let preAssessment = 20; // Default value
  if (profitted) preAssessment = 60; // If the business has made a profit, set preAssessment to 60%
  if (assetAverageGreaterThanLoan) preAssessment = 100; // If average asset value is greater than the loan amount, set preAssessment to 100%

  console.log("=== calculatePreAssessment summary ===");
  console.log("loanAmount:", loanAmount);
  console.log("assetTotal:", assetTotal);
  console.log("assetAverage:", assetAverage);
  
  console.log("\nprofitTotal:", profitTotal);
  console.log("profitAverage:", profitAverage);
  
  console.log("\nprofitted:", profitted);
  console.log("assetAverageGreaterThanLoan:", assetAverageGreaterThanLoan);
  console.log("preAssessment:", preAssessment);
  console.log("======================================");

  return preAssessment;
}