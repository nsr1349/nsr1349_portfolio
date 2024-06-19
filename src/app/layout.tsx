import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="flex items-center justify-center">
        <div className="flex m-20 gap-10">
          <div className="w-56 bg-slate-400 p-5">
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
          {children}
        </div>
        
        
        </body>
    </html>
  );
}
