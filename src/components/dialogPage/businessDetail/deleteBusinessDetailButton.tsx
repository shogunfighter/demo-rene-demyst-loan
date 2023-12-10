"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";

import { TEntry } from "@/../types/common";
import { removeBusinessDetail } from "@/server/actions";
import toast from "react-hot-toast";
import { Prisma } from "@prisma/client";

export default function DeleteBusinessDetailButton(prop: TEntry) {
    const [isPending, startTransition] = useTransition();

    return (
        <button 
            className="flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded gap-1"
            onClick={() => { startTransition(() => {

                // anonymous async fn
                (async () => {
                    try {
                        await removeBusinessDetail(prop.id);
                    }
                    catch (error) {
                        toast.error("Error: Unable to delete record. Ensure it's not in use elsewhere. If the issue persists, please contact support.");
                    }
                })();

            }) }}
        ><Trash2 size={20} /></button>
    );
}