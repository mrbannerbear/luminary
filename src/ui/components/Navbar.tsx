import Link from "next/link";
import "../../globals.css"

const Navbar = () => {
    return (
        <nav className="nav1 z-50">

            <div>
                <span className="text-xl">
                    LUMINARY
                </span>
            </div>

            <div className="flex justify-between items-center gap-5">

                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/about'}>Projects</Link>
                <Link href={'/about'}>Contact</Link>
                <Link href={'/about'}> 
                <button>Join the Cause</button>
                </Link>
            </div>
            
        </nav>
    );
};

export default Navbar;