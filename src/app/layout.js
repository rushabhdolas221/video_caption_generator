import './globals.css'
import SparklesIcon from "@/components/SparklesIcon";
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Rushabh",
  description: "Rushabh - AI Video Caption Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={
        inter.className +
        " bg-gradient-to-r from-bg-gradient-from via-bg-gradient-m to-bg-gradient-to min-h-screen text-white"
      }>
        <main className="p-2">
          <header className="flex justify-between my-6 px-2 sm:my-8 max-w-4xl mx-auto">

            <Link href="/" className="flex gap-1 items-center">
              <SparklesIcon />
              <span>Rushabh</span>
            </Link>

            <nav className="flex items-center gap-6 text-white/70">
              <Link href="/">Home</Link>
            </nav>

          </header>

          {children}
        </main>
      </body>
    </html>
  );
}