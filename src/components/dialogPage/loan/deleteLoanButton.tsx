"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { TEntry } from "@/../types/common";
import { removeLoan } from "@/server/actions";

export default function DeleteLoanButton(prop: TEntry) {
    const [isPending, startTransition] = useTransition();

    return (
        <button 
            className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded gap-1"
            onClick={() => { startTransition(() => removeLoan(prop.id)); }}
        ><Trash2 size={20} /></button>
    );
}