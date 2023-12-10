"use client";

import { createBusinessDetailInitial } from "@/server/actions";
import { PlusCircle } from "lucide-react";
import { useTransition } from "react";

export default function BusinessDetailCreateButton() {
    const [isPending, startTransition] = useTransition();
 
    return (
        <>
            <button 
                className="flex bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded gap-1 mt-2"
                onClick={(e) => { startTransition(() => createBusinessDetailInitial()) }}>
                <PlusCircle size={24} />
                <h1>Create</h1>
            </button>
        </>
    );
}