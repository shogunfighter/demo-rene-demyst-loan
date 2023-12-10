import { DROPDOWN_TYPE } from "@/../constants";
import { TAccountProvider, TBusinessDetail, TPageParam } from "@/../types/common";

import LoanFormDropDown from "@/components/dialogPage/loan/loanFormDropdown";
// import DialogPageHeader from "@/components/dialogPage/header";
import DialogPageFooter from "@/components/dialogPage/footer";
import { updateLoan } from "@/server/actions";

import prisma from "@/lib/prisma";


export default async function UpdateLoanPage(args: TPageParam) {
    const loanId = Number(args.params.id);
    const loanEntry = await prisma.loan.findUnique({ where: { id: loanId } });

    // retrieve list of business detail
    const businessDetails: TBusinessDetail[] = await prisma.businessDetail.findMany();
    const businessDetailOptions = businessDetails.map(item => ({label: item?.name || "", value: String(item.id)}));
    
    // retrieve list of account provider
    const accountProviders: TAccountProvider[] = await prisma.accountProvider.findMany();
    const accountProviderOptions = accountProviders.map(item => ({label: item?.name || "", value: String(item.id)}));

    return (
        <>
            {/* DEBUGGING
            <div>[params.id]: {loanId}</div>
            <div>[businessDetailsOption]: <pre>{JSON.stringify(businessDetailOptions, null, 2)}</pre></div>
            <div>[accountProvidersOption]: <pre>{JSON.stringify(accountProviderOptions, null, 2)}</pre></div> */}
            <div className="max-w-screen-lg mx-auto mt-5">
                <h2 className="flex gap-2 text-lg text-gray-400 font-semibold">
                    <span>Initiate</span>
                    <span className="mx-5">&gt;</span>
                    <span className="font-bold text-green-500">Update</span>
                    <span className="mx-5">&gt;</span>
                    <span>Review</span>
                </h2>
                <form action={updateLoan}>
                    <input name="id" readOnly value={loanId} hidden/>
                    <div className="w-[350px] mx-auto mt-5 shadow-md">
                        {/* <DialogPageHeader title="Update Application" /> */}
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="description" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input name="description" type="text" value={loanEntry?.description || ""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="amount" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount to loan</label>
                                <input name="amount" type="number" value={loanEntry?.amount || 0} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="dropdownBusinessDetail" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a business detail:</label>
                                <LoanFormDropDown
                                    options={businessDetailOptions}
                                    value={String(loanEntry?.businessDetailId) || "-1"}
                                    id={Number(loanId)}
                                    variant={DROPDOWN_TYPE.BUSINESS_DETAIL}
                                />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="dropdownAccountProvider" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an account provider:</label>
                                <LoanFormDropDown
                                    options={accountProviderOptions}
                                    value={String(loanEntry?.accountProviderId) || "-1"}
                                    id={Number(loanId)}
                                    variant={DROPDOWN_TYPE.ACCOUNT_PROVIDER}
                                />
                            </div>
                        </div>

                        <DialogPageFooter />
                    </div>
                </form>
            </div>
        </>
    );
}