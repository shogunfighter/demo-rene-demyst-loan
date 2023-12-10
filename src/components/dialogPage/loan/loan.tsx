"use client";

import { LOAN_APPLICATION_STATUS } from "@/../constants";
import { TLoanExtended } from "@/../types/common";
import { TableCell, TableRow } from "@/components/ui/table"
import LoanActionButton from "./loanActionButton";

export default function Loan(prop: TLoanExtended) {
    return (
        <TableRow>
            <TableCell className="font-medium">{prop.id}</TableCell>
            <TableCell>{LOAN_APPLICATION_STATUS[prop.status]}</TableCell>
            <TableCell>{prop.description}</TableCell>
            <TableCell>{prop.amount}</TableCell>
            <TableCell>{prop?.preAssessment}</TableCell>
            <TableCell>{prop?.accountProviderName}</TableCell>
            <TableCell>{prop?.businessDetailName}</TableCell>
            <TableCell><LoanActionButton {...prop} /></TableCell>
        </TableRow>
    );
}