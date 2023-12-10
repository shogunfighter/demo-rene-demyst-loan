import prisma from "@/lib/prisma";
import { TPageParam } from "@/../types/common";
import DialogPageFooter from "@/components/dialogPage/footer";
import BusinessDetailYearDropdown from "@/components/dialogPage/businessDetail/businessDetailYearDropdown";
import { updateBusinessDetail } from "@/server/actions";

function createYearRange(startYear = 1980, endYear = 2099) {
    const yearRange = [];
    for (let year = startYear; year <= endYear; year++) {
        yearRange.push(year);
    }
    return yearRange;
}

export default async function BusinessDetailPage(args: TPageParam) {
    const yearOptions = createYearRange().map(year => ({ label: String(year), value: String(year) }));
    const currentYear = new Date().getFullYear();

    const id = Number(args.params.id);
    const entry = await prisma.businessDetail.findUnique({
        where: { id }
    });

    return (
        <>
            <div className="max-w-screen-lg mx-auto mt-5">
                <form action={updateBusinessDetail}>
                    <input name="id" type="hidden" value={id} />
                    <div className="w-[350px] mx-auto mt-5 shadow-md">
                        {/* <DialogPageHeader title="Business Detail" /> */}
                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input name="name" type="text" className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} />
                            </div>
                        </div>

                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="year" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                <BusinessDetailYearDropdown
                                    id={id}
                                    options={yearOptions}
                                    value={String(entry?.year || currentYear)}
                                />
                            </div>
                        </div>

                        <div className="grid w-full items-center gap-4 pt-4 px-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="summary" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary (loss or profit - per year)</label>
                                <input name="summary" type="number" className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} />
                            </div>
                        </div>

                        <DialogPageFooter />
                    </div>
                </form>
            </div>
        </>
    );
}