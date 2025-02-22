import Link from "next/link";
import Button from "./atoms/Button";
import Logo from "./atoms/Logo";
import Menu from "./atoms/Menu";

export default function Navbar() {
    return (
        <nav className="bgbackground-grey py-4 padding sticky top-0 z-50 backdrop-blur-md">
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                <Link href="/">
                    <Logo />
                </Link>
                <NavLists />
                <Menu />
            </div>
        </nav>
    )
}


function NavLists() {
    return (
        <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center space-x-8 *:capitalize">
                <Link href='/' className="transition-colors hover:text-primary">Home</Link>
                <Link href='/about' className="transition-colors hover:text-primary">About</Link>
                <Link href="/properties" className="transition-colors hover:text-primary">properties</Link>
                <Link href="/services" className="transition-colors hover:text-primary">services</Link>
            </ul>

            <Button className="bg-background hover:bg-primary">contact us</Button>
        </div>
    )
}