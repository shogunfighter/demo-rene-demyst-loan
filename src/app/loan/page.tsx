// import DialogPageHeader from "@/components/dialogPage/header";
import DialogPageFooter from "@/components/dialogPage/footer";
import { initiateLoan } from "@/server/actions";

export default async function InitialiseApplicationPage() {
    return (
        <>
            <div className="max-w-screen-lg mx-auto mt-5">
                <h2 className="flex gap-2 text-lg text-gray-400 font-semibold">
                    <span className="font-bold text-green-500">Initiate</span>
                    <span className="mx-5">&gt;</span>
                    <span>Update</span>
                    <span className="mx-5">&gt;</span>
                    <span>Review</span>
                </h2>
                <form action={initiateLoan}>
                    <div className="w-[350px] mx-auto mt-5 shadow-md">
                        {/* <DialogPageHeader title="Initiate Application" /> */}
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="description" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input name="description" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="amount" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount to loan</label>
                                <input name="amount" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <DialogPageFooter />
                    </div>
                </form>
            </div>
        </>
    );
}