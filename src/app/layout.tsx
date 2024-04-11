import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import Navbar from "@/sections/Navbar/Navbar";
import Footer from "@/sections/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800','900'] });

export const metadata: Metadata = {
  title: "CBS",
  description: "Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} grid place-items-center`}>
        <ThemeProvider  attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          <div className="w-full max-w-[1280px] px-4 overflow-y-auto">
            {children}
          </div>
          <Footer/>
        </ThemeProvider>

        </body>
    </html>
  );
}
