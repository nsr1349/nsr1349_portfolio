import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Image from "next/image";
import { IoMail, IoLocation } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";

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
          <div className="min-w-72 p-5 pt-14 flex flex-col items-center gap-2">
            <Image className="aspect-square object-cover rounded-full w-40 overflow-hidden" width={300} height={300} src='https://i.pinimg.com/564x/6a/aa/e1/6aaae1d1c5acbf4439937e2db5744b38.jpg' alt='' />
            <h1 className="text-2xl font-bold">No sung re</h1>
            <p className="text-gray-500">Frontend Dev</p>
            <ul className="mt-14">
              <li className="flex w-full items-center gap-3 p-2 mb-2">
                <IoMail className="text-4xl"/>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p>nsr1349@naver.com</p>
                </div>
              </li>
              {/* // */}
              <li className="flex w-full items-center gap-3 p-2 mb-2">
                <IoLocation className="text-4xl"/>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p>nsr1349@naver.com</p>
                </div>
              </li>
              <li className="flex w-full items-center gap-3 p-2 mb-2">
                <FaBirthdayCake className="text-4xl"/>
                <div>
                  <p className="text-gray-500">Email</p>
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
