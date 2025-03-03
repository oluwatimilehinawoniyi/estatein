"use client";
import Link from "next/link";
import Button from "./atoms/Button";
import Logo from "./atoms/Logo";
import Menu from "./atoms/Menu";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from 'next/navigation'
import Ads from "./ads";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
    return (
        <div className="bg-background-grey sticky top-0 z-50">
            <AnimatePresence>
                <Ads />
                <nav className="py-4 padding">
                    <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                        <div className="md:w-2/5 flex items-start">
                            <Link href="/" className="wmax">
                                <Logo />
                            </Link>
                        </div>
                        <NavLists />
                        <Menu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
                    </div>

                    {/* Mobile Navigation */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: isOpen ? 0 : "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 left-0 w-2/3 h-screen bg-background text-white flex flex-col gap-8 p-8 text-lg md:hidden z-40"
                    >
                        <Logo />
                        <ul className="flex flex-col gap-8 *:w-max">
                            <Link href='/' className="transition-colors hover:text-primary">Home</Link>
                            <Link href='/about' className="transition-colors hover:text-primary">About</Link>
                            <Link href="/properties" className="transition-colors hover:text-primary">Properties</Link>
                            <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
                        </ul>
                        <Button href="/contact" className="bg-background hover:bg-primary mt-auto">Contact Us</Button>
                    </motion.div>


                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-background-grey opacity-80 md:hidden z-30"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}
                </nav>
            </AnimatePresence>
        </div>
    )
}


function NavLists() {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex justify-between items-center gap-8 md:w-2/3">
            <ul className="flex items-center space-x-8 *:capitalize">
                {['home', 'about', 'properties', 'services'].map((item, index) => (
                    <Link
                        key={index}
                        href={item === 'home' ? '/' : `/${item}`}
                        className={`${pathname === `/${item}` || (item === 'home' && pathname === '/') ? 'text-primary bg-background rounded-lg border border-border' : 'text-white'} transition-colors hover:text-primary py-2 px-4`}>{item}</Link>
                ))}
            </ul>

            <Button href="/contact" className={`${pathname === '/contact' && 'text-primary'} bg-background hover:bg-primary hover:text-white`}>contact us</Button>
        </div>
    )
}