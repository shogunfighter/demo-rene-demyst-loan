
// import { Poppins } from "next/font/google"; // google font

import Link from "next/link";
import { Suspense } from "react";
import { PlusCircle } from 'lucide-react';

import Spinner from "@/components/spinner";
import Loans from "@/components/dialogPage/loan/loans";

// const textFont = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// })

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
      {/* <Link href="/businessDetail">
        <button className="flex bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded gap-1 mt-2">
          <PlusCircle size={24} />
          <h1>Create Business Detail</h1>
        </button>
      </Link>

      <Link href="/loan">
        <button className="flex bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded gap-1 mt-2">
          <PlusCircle size={24} />
          <h1>Start Loan Application</h1>
        </button>
      </Link> */}

      <Suspense fallback={<Spinner />}>
        <Loans />
      </Suspense>
    </div>
  )
}