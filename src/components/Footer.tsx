import { Facebook, LinkedinIcon, MailPlus, Send, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./atoms/Logo";

export default function Footer() {
    return (
        <footer className="paddings border-t border-border ">
            <div className="flex items-center flex-col justify-between">
                {/* Top Section */}
                <div className="w-full max-w-7xl mx-auto justify-between py-10 flex flex-wrap gap-8 padding">
                    {/* Logo & Newsletter */}
                    <div className="flex flex-col items-start">
                        <Logo />
                        <div className="mt-4 relative border border-border rounded-lg flex items-center p-2 gap-2">
                            <span className="text-white/60">
                                <MailPlus size={18} />
                            </span>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-transparent text-white h-full placeholder:text-sm"
                            />
                            <button className="bg-primary p-2 rounded-lg">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white/60 uppercase font-semibold">Home</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/" className="hover:underline">Hero Section</Link></li>
                            <li><Link href="/about" className="hover:underline">About</Link></li>
                            <li><Link href="/properties" className="hover:underline">Properties</Link></li>
                            <li><Link href="#" className="hover:underline">Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white/60 uppercase font-semibold">About Us</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="#" className="hover:underline">Our Story</Link></li>
                            <li><Link href="#" className="hover:underline">Our Works</Link></li>
                            <li><Link href="#" className="hover:underline">How It Works</Link></li>
                            <li><Link href="#" className="hover:underline">Our Team</Link></li>
                            <li><Link href="#" className="hover:underline">Our Clients</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white/60 uppercase font-semibold">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="#" className="hover:underline">Valuation Mastery</Link></li>
                            <li><Link href="#" className="hover:underline">Strategic Marketing</Link></li>
                            <li><Link href="#" className="hover:underline">Negotiation Wizardry</Link></li>
                            <li><Link href="#" className="hover:underline">Closing Success</Link></li>
                            <li><Link href="#" className="hover:underline">Property Management</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="padding bg-background-grey w-full">
                    <div className=" max-w-7xl mx-auto py-2 flex flex-col md:flex-row justify-between items-center w-full gap-2">
                        <p className="text-white text-sm font-medium">©{new Date().getFullYear()} Estatein. All Rights Reserved.</p>
                        <p className="text-white text-sm font-medium">
                            <Link href="#" className="hover:underline">Terms & Conditions</Link>
                        </p>
                        {/* Social Icons */}
                        <div className="flex justify-center space-x-4 md:mt-0">
                            <Facebook size={18} />
                            <LinkedinIcon size={18} />
                            <Twitter size={18} />
                            <Youtube size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
