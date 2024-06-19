import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nsr-portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex mt-20 mx-auto gap-10 w-[95%] max-w-[1600px] bg-blue-500">
          <div className="bg-slate-400 p-5">
            <div>
              아바타
            </div>
            <h1>No sung re</h1>
            <p>Frontend Dev</p>
            <ul>
              <li>
                <div>아이콘</div>
                <div>
                  <p>Email</p>
                  <p>nsr1349@naver.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-grow">
            <nav className="bg-green-300">
              <Link href="/It'sMe">it&apos;s Me</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/about">About</Link>
            </nav>
            {children}
          </div>
          
        </div>
        
        
        </body>
    </html>
  );
}
