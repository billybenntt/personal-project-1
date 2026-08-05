'use client'
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { data as planets } from "@/content/planets";

function Header() {
    const pathname = usePathname();

    return (
        <header className="flex items-stretch min-h-17 md:min-h-21.25 justify-between ">

            <div className="flex items-center px-5">
                <Link href="/earth">
                    <span className="font-extrabold ml-5 text-2xl uppercase text-white font-heading">
                        The Planets
                    </span>
                </Link>
            </div>

            <nav className="hidden lg:flex px-10 items-center">
                {planets.map(({ name }) => {
                    const href = `/${name.toLowerCase()}`
                    const isActive = pathname === href

                    return (
                        <div key={name} className="group relative h-full flex items-center px-4 font-league-spartan">
                            <Link
                                href={href}
                                className={`tracking-widest uppercase text-sm font-bold transition-colors duration-300 hover:text-white ${isActive ? "text-white" : "text-white/70"}`}
                            >
                                {name}
                            </Link>
                            <span
                                className={`absolute top-0 left-0 h-1 w-full bg-white origin-center transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                            />
                        </div>
                    )
                })}
            </nav>

            <button className="lg:hidden mr-5 text-white" aria-label="Open menu">
                <Menu size={28} />
            </button>
        </header>
    )
}

export default Header