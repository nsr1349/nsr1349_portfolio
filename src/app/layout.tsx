import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

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
        <div className="flex mt-20 mx-auto gap-10 w-[95%] max-w-[1200px]">
          <div className="p-5">
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
          <div className="border-gray-800 h-[700px] border-r-[.1px]"></div>
          <div className="flex-grow">
            <Nav/>
            <main>
              {children}
            </main>
          </div>
        </div>
        
        
        </body>
    </html>
  );
}
