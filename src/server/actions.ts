'use server'


import prisma from "@/lib/prisma";
import { calculatePreAssessment } from "@/lib/utils";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { APP_ERROR, DROPDOWN_TYPE, LOAN_APPLICATION_STATUS } from "@/../constants";

import sheet from "@/../__mocks__/sheet1.json"; // mocked data
// import sheet from "@/../__mocks__/sheet2.json"; // mocked data
// import sheet from "@/../__mocks__/sheet3.json"; // mocked data

/**
 * Triggered upon creation of a loan entry
 * @param formData 
 */
export async function initiateLoan(formData: FormData) {
    let entry;

    try {
        entry = await prisma.loan.create({
            data: {
                status: LOAN_APPLICATION_STATUS.INITIATED,
                description: String(formData.get("description") || ""),
                amount: Number(formData.get("amount") || ""),
                accountProviderId: -1,
                businessDetailId: -1,
                userId: 1
            }
        });
    } catch (error) {
        // console.error('Error initiateLoan:', error);
        // throw error;
        console.error(APP_ERROR.SA_LOAN_INITIATE);
        throw new Error(APP_ERROR.SA_LOAN_INITIATE);
    }

    if (entry) redirect(`/loan/update/${entry.id}`);
};

/**
 * Update the businessDetailId of the loan entry
 * @param id
 * @param businessDetailId businessDetailId
 */
export async function removeLoan(id: number) {
    try {
        await prisma.loan.delete({
            where: { id }
        });
    } catch (error) {
        // console.error('Error updateLoanBusinessDetail:', error);
        // throw error;
        console.error(APP_ERROR.SA_LOAN_REMOVE);
        throw new Error(APP_ERROR.SA_LOAN_REMOVE);
    }

    revalidatePath(`/loan`);
}

/**
 * Update the loan entry for dropdown 
 * @param variant 
 * @param id 
 * @param value 
 */
export async function updateLoanDropdownParam(variant: number, id: number, value: any) {
    try {
        switch (variant) {
            case DROPDOWN_TYPE.ACCOUNT_PROVIDER:
                await prisma.loan.update({
                    where: { id },
                    data: { accountProviderId: value },
                });
                break;
            case DROPDOWN_TYPE.BUSINESS_DETAIL:
                await prisma.loan.update({
                    where: { id },
                    data: { businessDetailId: value },
                });
                break;
        }
    } catch (error) {
        // console.error('Error updateLoanDropdownParam:', error);
        // throw error;

        console.error(APP_ERROR.SA_LOAN_UPDATE_PARAM);
        throw new Error(APP_ERROR.SA_LOAN_UPDATE_PARAM);
    }

    revalidatePath(`/loan/update/${id}`);
}

export async function updateLoan(formData: FormData) {
    let loanId;

    try {
        loanId = Number(formData.get("id"));
        const description = String(formData.get("description") || "");
        const status = LOAN_APPLICATION_STATUS.REVIEW_PENDING;

        // load from accounting software to get the balance sheet
        // right now i don't have any idea what it looks like
        // we just play with mock data

        const loanEntry = await prisma.loan.findUnique({ where: { id: loanId } });
        // const accountProviderEntry = await prisma.accountProvider.findUnique({ where: { id: loanEntry?.accountId } });
        // const businessDetailEntry = await prisma.businessDetail.findUnique({ where: { id: loanEntry?.businessDetailId } });

        // request balance sheet from accounting software
        // todo: since we don't have access to that api, we use mock data

        // psuedo code: 
        // ask accounting software to get balance sheet by sending the following:
        // 1. type of accounting software
        // 2. summary business - profit or loss
        // const sheet = requestAccountingSoftware(accountProviderEntry.name, businessDetailEntry.summary);

        // now we mock it since we don't have access to the api 

        const profitsLast12Months = sheet.map(item => item.profitOrLoss);
        const assetsLast12Months = sheet.map(item => item.assetsValue);

        const preAssessmentValue = calculatePreAssessment(Number(loanEntry?.amount), profitsLast12Months, assetsLast12Months);
        console.log(`preAssessment: ${preAssessmentValue}`);

        await prisma.loan.update({
            where: { id: loanId },
            data: {
                status,
                description,
                preAssessment: preAssessmentValue
            },
        });

    } catch (error) {
        // console.error('Error updateLoan:', error);
        // throw error;
        
        console.error(APP_ERROR.SA_LOAN_UPDATE);
        throw new Error(APP_ERROR.SA_LOAN_UPDATE);
    }

    if (loanId) redirect(`/loan/review/${loanId}`);
};

export async function reviewLoan(formData: FormData) {
    // todo: you can either use a cron job that with a lambda to process the business logic (for the decision engine)
    // - so processing will happen at the background and status will update on its own

    try {
        const loanId = Number(formData.get("id"));
        const loanEntry = await prisma.loan.findUnique({ where: { id: loanId } });
        const businessDetailEntry = await prisma.businessDetail.findUnique({ where: { id: loanId } });
        
        if (loanEntry) {
            // update status for review
            await prisma.loan.update({
                where: { id: loanId },
                data: {
                    status: LOAN_APPLICATION_STATUS.SUBMISSION_PENDING
                },
            });

            const requestOptions: RequestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: businessDetailEntry?.name,
                    year: businessDetailEntry?.year,
                    summary: businessDetailEntry?.summary,
                    preAssessment: loanEntry?.preAssessment
                }),
            };

            try {
                // need to mock this
                const decisionResult = await submitLoan('https://url-of-decision-server/', requestOptions);

                if (typeof decisionResult !== "undefined") {
                    await prisma.loan.update({
                        where: { id: loanId },
                        data: {
                            status: LOAN_APPLICATION_STATUS.FINALISED
                        },
                    });
                }
            }
            catch (error) {
                // console.error('Error reviewLoan:', error);
                // throw error;
                console.error(APP_ERROR.SA_LOAN_REVIEW_FETCH);
                // throw new Error(APP_ERROR.SA_LOAN_REVIEW_FETCH);
                
                return { error: APP_ERROR.SA_LOAN_REVIEW_FETCH }
            }
        }
    }
    catch (error) {
        // console.error('Error reviewLoan:', error);
        // throw error;
        console.error(APP_ERROR.SA_LOAN_REVIEW);
        // throw new Error(APP_ERROR.SA_LOAN_REVIEW);

        return { error: APP_ERROR.SA_LOAN_REVIEW }
    }

    redirect(`/`);
}

export async function submitLoan(apiUrl: string, requestOptions: RequestInit) {
    try {
        // Perform the fetch POST request using async/await
        const response = await fetch(apiUrl, requestOptions);

        // Check if the response status is in the range 200-299 (successful)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Handle the data returned from the server
        console.log('Response from server:', data);

        return data;
    } catch (error) {
        // Handle errors that may occur during the fetch
        console.error(APP_ERROR.DECISION_SERVER);
        // throw new Error(APP_ERROR.DECISION_SERVER);
        return { error: APP_ERROR.DECISION_SERVER }

    }
}

/**
 * Initially create an entry (business detail) when user clicks the button
 */
export async function createBusinessDetailInitial() {
    let entry;

    try {
        entry = await prisma.businessDetail.create({
            data: {
                name: "",
                year: new Date().getFullYear(),
                summary: 0
            }
        });
    } catch (error) {
        // console.error('Error createBusinessDetailInitial:', error);
        // throw error;
        console.error(APP_ERROR.SA_BUSINESS_DETAIL_CREATE);
        throw new Error(APP_ERROR.SA_BUSINESS_DETAIL_CREATE);
    }

    if (entry) redirect(`/businessDetail/${entry.id}`);
};

/**
 * Update the businessDetail year value
 * @param id businessDetail id
 * @param year 
 */
export async function updateBusinessDetailYear(id: number, year: number) {
    try {
        await prisma.businessDetail.update({
            where: { id },
            data: { year }
        });
    } catch (error) {
        // console.error('Error updateBusinessDetailYear:', error);
        // throw error;
        console.error(APP_ERROR.SA_BUSINESS_DETAIL_UPDATE_PARAM);
        throw new Error(APP_ERROR.SA_BUSINESS_DETAIL_UPDATE_PARAM);
    }

    revalidatePath(`/businessDetail/${id}`);
}

/**
 * Triggered upon creation of a loan entry
 * @param formData 
 */
export async function updateBusinessDetail(formData: FormData) {
    let id = Number(formData.get("id"));

    try {
        await prisma.businessDetail.update({
            where: { id },
            data: {
                name: String(formData.get("name") || ""),
                summary: Number(formData.get("summary"))
            }
        });
    } catch (error) {
        // console.error('Error updateBusinessDetail:', error);
        // throw error;
        console.error(APP_ERROR.SA_BUSINESS_DETAIL_UPDATE);
        throw new Error(APP_ERROR.SA_BUSINESS_DETAIL_UPDATE);
    }

    redirect(`/businessDetail`);
};


/**
 * Update the businessDetailId of the loan entry
 * @param id
 * @param businessDetailId businessDetailId
 */
export async function removeBusinessDetail(id: number) {
    try {
        await prisma.businessDetail.delete({ where: { id } });
    } catch (error) {
        // console.error('Error removeBusinessDetail:', error);
        // throw error;
        console.error(APP_ERROR.SA_BUSINESS_DETAIL_REMOVE);
        throw new Error(APP_ERROR.SA_BUSINESS_DETAIL_REMOVE);
    }
    revalidatePath(`/businessDetail`);
}