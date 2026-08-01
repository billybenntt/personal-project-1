import {antonio} from "@/styles/fonts";


function Header() {
    return (
        <header className="flex items-center justify-between h-24 p-10 border-b border-white/50">
            <div>
                <span className={`font-extrabold text-2xl uppercase text-white hidden sm:block ${antonio.className}`}>
                          The Planets
                </span>
            </div>
            <nav>Menu</nav>
        </header>
    )
}

export default Header