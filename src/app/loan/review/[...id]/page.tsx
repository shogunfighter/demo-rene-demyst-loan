import { TAccountProvider, TBusinessDetail, TPageParam } from "@/../types/common";

// import DialogPageHeader from "@/components/dialogPage/header";
import DialogPageFooter from "@/components/dialogPage/footer";
import { reviewLoan } from "@/server/actions";

import prisma from "@/lib/prisma";
import toast from "react-hot-toast";


export default async function UpdateLoanPage(args: TPageParam) {
    
    const loanId = Number(args.params.id);
    const loanEntry = await prisma.loan.findUnique({ where: { id: loanId } });

    // retrieve list of business detail
    const businessDetails: TBusinessDetail[] = await prisma.businessDetail.findMany();
    const businessDetailLabel = businessDetails.find(item => item.id === loanEntry?.businessDetailId);
    
    // retrieve list of account provider
    const accountProviders: TAccountProvider[] = await prisma.accountProvider.findMany();
    const accountProviderLabel = accountProviders.find(item => item.id === loanEntry?.accountProviderId);

    return (
        <>
            {/* DEBUGGING
            <div>[params.id]: {loanId}</div>
            <div>[businessDetailsOption]: <pre>{JSON.stringify(businessDetailOptions, null, 2)}</pre></div>
            <div>[accountProvidersOption]: <pre>{JSON.stringify(accountProviderOptions, null, 2)}</pre></div> */}
            <div className="max-w-screen-lg mx-auto mt-5">
                <h2 className="flex gap-2 text-lg text-gray-400">
                    <span>Initiate</span>
                    <span className="mx-5">&gt;</span>
                    <span>Update</span>
                    <span className="mx-5">&gt;</span>
                    <span className="font-bold text-green-500">Review</span>
                </h2>
                <form action={reviewLoan}>
                    <input name="id" readOnly value={loanId} hidden/>
                    <div className="w-[350px] mx-auto mt-5 shadow-md">
                        {/* <DialogPageHeader title="Review Application" /> */}
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="description" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input name="description" readOnly value={loanEntry?.description || ""} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="amount" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount to loan</label>
                                <input name="amount" readOnly value={loanEntry?.amount || 0} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="dropdownBusinessDetail" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected business detail:</label>
                                <input name="dropdownBusinessDetail" readOnly value={businessDetailLabel?.name || ""} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </div>

                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="dropdownAccountProvider" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected account provider:</label>
                                <input name="dropdownAccountProvider" readOnly value={accountProviderLabel?.name || ""} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </div>

                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="preAssessment" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Pre assessment:</label>
                                <input name="preAssessment" readOnly value={loanEntry?.preAssessment} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </div>

                        <DialogPageFooter cancel="Edit" cancelRedirect={`/loan/update/${loanId}`} submit="Submit Application"/>
                    </div>
                </form>
            </div>
        </>
    );
}