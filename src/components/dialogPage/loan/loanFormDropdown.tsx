"use client"

import { useTransition } from "react";
import { TLoanDropdown } from "@/../types/common";
import { updateLoanDropdownParam } from "@/server/actions";

export default function LoanFormDropDown({ options, value, id, variant }: TLoanDropdown) {
    const [isPending, startTransition] = useTransition();

    return (
        <select
            value={value}
            onChange={(e) => { startTransition(() => updateLoanDropdownParam(variant, Number(id), Number(e.target.value || -1))) }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};