import { Suspense } from "react";
import Spinner from "@/components/spinner";
import BusinessDetails from "@/components/dialogPage/businessDetail/businessDetails";
import BusinessDetailCreateButton from "@/components/dialogPage/businessDetail/businessDetailCreateButton";

export default async function BusinessDetailPage() {
    return (
        <div className="max-w-screen-lg mx-auto mt-5">
            <p><label className="text-md font-bold mb-6">Create Entries:</label> <span>Click the `Create` button to add new entries.</span>
                <br />
                <label className="text-md font-bold mb-6">Delete Records:</label> <span>Use the `Delete` button to remove outdated records.
                    Before deleting, make sure the `Business Detail` records are not being used.</span></p><br />
            <BusinessDetailCreateButton />

            <Suspense fallback={<Spinner />}>
                <BusinessDetails />
            </Suspense>
        </div>
    );
}