import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Home } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          

        <header className="border-b w-full">
          <nav className="w-full bg-gray lg:py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
              {/* <Link href="/" className="flex items-center"><Home /></Link> */}
              <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col justify-center font-medium lg:flex-row lg:space-x-8">
                  <li className="mx-2">
                    <Link href="/" className="block py-2 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Loan List</Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/loan" className="block py-2 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Create Loan</Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/businessDetail" className="block py-2 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Business Details</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header> 

        {/* <Link href="/"><Home /></Link>
        <br /> */}
        
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-md">
          {children}
        </div>

        <Toaster position="top-right"/>
      </body>
    </html>
  )
}



