import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasty Bytes",
  description: "Discover and share delicious recipes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>
        <div className="min-h-screen flex flex-col relative">
          <div className="absolute inset-0 bg-green-100 bg-opacity-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%2322c55e22%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>
          </div>
          <Navbar />
          <main className="flex-grow relative flex justify-center items-start">
            {children}
          </main>
          <footer className="bg-white bg-opacity-80 backdrop-blur-sm py-4 text-center text-green-800 relative">
            <p>&copy; {currentYear} Tasty Bytes. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
