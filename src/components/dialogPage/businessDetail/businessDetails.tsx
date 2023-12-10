import prisma from "@/lib/prisma";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import BusinessDetail from "./businessDetail";

export default async function BusinessDetails() {
    const entries = await prisma.businessDetail.findMany();

    if (entries?.length > 0) {
        return (
            <>
                <Table className="mt-5 mx-auto max-w-screen-lg">
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead>Summary</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {/* id=-1 is a control entry to help us set default id */}
                        {entries.filter(entry => (entry.id !== -1)).map((entry) => (<BusinessDetail {...entry} key={entry.id} />))}
                    </TableBody>
                </Table>
            </>
        )
        
    }
    else {
        return (<div className="mt-5 mx-auto max-w-screen-lg">
            No business detail records found.
        </div>);
    }
}