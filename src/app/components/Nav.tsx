'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavNames = [
    {
        link : "/",
        title : "It's Me",
    },
    {
        link : "/portfolio",
        title : "Portfolio",
    },
    {
        link : "/about",
        title : "About",
    },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="flex gap-3 justify-end">
            {
                NavNames.map(({link,title})=> 
                    <Link href={link} key={title}>
                        <h1 className={link === pathname ? "font-bold" : ""}>{title}</h1>
                    </Link>)
            }
        </nav>
    );
}
