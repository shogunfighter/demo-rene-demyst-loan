"use client";

import { LOAN_APPLICATION_STATUS } from "@/../constants";
import { TLoanExtended } from "@/../types/common";
import Link from "next/link";
import DeleteLoanButton from "./deleteLoanButton";

export default function LoanActionButton(prop: TLoanExtended) {
    switch (Number(prop.status)) {


        // INITIATED = 0,
        // REVIEW_PENDING = 1,
        // SUBMISSION_PENDING = 2,
        // FINALISED = 3

        case LOAN_APPLICATION_STATUS.INITIATED:
            return (
                <div className="flex gap-2">
                    <Link href={`/loan/update/${prop.id}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Update Application</button>
                    </Link>
                    <DeleteLoanButton id={prop.id} />
                </div>
            );
        case LOAN_APPLICATION_STATUS.REVIEW_PENDING:
            return (
                <div className="flex gap-2">

                    <Link href={`/loan/review/${prop.id}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Review Application</button>
                    </Link>
                    <DeleteLoanButton id={prop.id} />
                </div>
            );
        case LOAN_APPLICATION_STATUS.SUBMISSION_PENDING:
        case LOAN_APPLICATION_STATUS.FINALISED:
        default:
            return (
                <div className="flex gap-2">
                    <DeleteLoanButton id={prop.id} />
                </div>
            );
    }
}