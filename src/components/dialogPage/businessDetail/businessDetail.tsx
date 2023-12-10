"use client";

import { TBusinessDetail } from "@/../types/common";
import { TableCell, TableRow } from "@/components/ui/table"
import DeleteBusinessDetailButton from "./deleteBusinessDetailButton";

export default function BusinessDetail(prop: TBusinessDetail) {
    return (
        <TableRow>
            <TableCell className="font-medium">{prop.id}</TableCell>
            <TableCell>{prop.name}</TableCell>
            <TableCell>{prop.year}</TableCell>
            <TableCell>{prop.summary}</TableCell>
            <TableCell><DeleteBusinessDetailButton id={prop.id} /></TableCell>
        </TableRow>
    );
}