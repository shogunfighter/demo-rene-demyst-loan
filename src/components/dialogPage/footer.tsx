'use client';

import Link from "next/link";

type TFooter = {
    cancel?: string;
    cancelRedirect?: string;
    submit?: string;
};

export default function DialogPageFooter(param: TFooter) {
    return (
        <div className="flex justify-end gap-2 mt-4 p-4">
            <Link href={param?.cancelRedirect || "/"}>
                <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                    {param.cancel || "Cancel"}
                </button>
            </Link>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {param.submit || "Submit"}
            </button>
        </div>
    );
}