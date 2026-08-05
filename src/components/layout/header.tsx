import Link from "next/link";
import { Menu } from "lucide-react";

const planets = [
    { name: "mercury", bar: "bg-gray-400" },
    { name: "venus", bar: "bg-amber-200" },
    { name: "earth", bar: "bg-blue-400" },
    { name: "mars", bar: "bg-red-500" },
    { name: "jupiter", bar: "bg-orange-300" },
    { name: "saturn", bar: "bg-yellow-200" },
    { name: "uranus", bar: "bg-cyan-300" },
    { name: "neptune", bar: "bg-indigo-400" },
];

function Header() {
    return (
        <header className="flex items-stretch min-h-17 md:min-h-21.25 justify-between ">

            <div className="flex items-center px-5">
                <Link href="/earth">
                    <span className="font-extrabold ml-5 text-2xl uppercase text-white font-heading">
                        The Planets
                    </span>
                </Link>
            </div>

            <nav className="hidden lg:flex  px-10 items-center">
                {planets.map(({ name, bar }) => (
                    <div key={name} className="group relative h-full flex items-center px-4 font-league-spartan">
                        <Link
                            href={`/${name}`}
                            className="tracking-widest uppercase text-sm font-bold text-white/70 transition-colors duration-300 hover:text-white"
                        >
                            {name}
                        </Link>
                        <span
                            className={`absolute top-0 left-0 h-1 w-full ${bar} origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}
                        />
                    </div>
                ))}
            </nav>

            <button className="lg:hidden mr-5 text-white" aria-label="Open menu">
                <Menu size={28} />
            </button>
        </header>
    )
}

export default Header