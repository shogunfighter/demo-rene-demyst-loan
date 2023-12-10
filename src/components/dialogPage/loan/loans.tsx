import prisma from "@/lib/prisma";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TAccountProvider, TBusinessDetail, TLoan } from "@/../types/common";
import Loan from "./loan";

export default async function Loans() {

    const [
        loanEntries,
        businessDetailEntries,
        accountProviderEntries
    ] = await Promise.all([
        prisma.loan.findMany(),
        prisma.businessDetail.findMany(),
        prisma.accountProvider.findMany()
    ]);

    const findBusinessDetailNames = loanEntries
        .filter(entry => (entry.id !== -1))
        .map(entry => entry.businessDetailId)
        .map(id => businessDetailEntries.find(item => item.id === id)?.name);

    const findAccountProviderNames = loanEntries
        .filter(entry => (entry.id !== -1))
        .map(entry => entry.accountProviderId)
        .map(id => accountProviderEntries.find(item => item.id === id)?.name);

    if (loanEntries?.length > 0) {
        return (
            <>
                <Table className="mt-5 mx-auto max-w-screen-lg">
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Pre Assessment</TableHead>
                            <TableHead>Account Provider</TableHead>
                            <TableHead>Business Name</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {/* id=-1 is a control entry to help us set default id */}
                        {loanEntries.filter(entry => (entry.id !== -1)).map((entry, id) => (<Loan {...entry} key={entry.id} businessDetailName={findBusinessDetailNames[id] || ""} accountProviderName={findAccountProviderNames[id] || ""} />))}
                    </TableBody>
                </Table>
            </>
        )

    }
    else {
        return (<div className="mt-5 mx-auto max-w-screen-lg">
            No loan records found.
        </div>);
    }
}