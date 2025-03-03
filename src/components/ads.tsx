"use client"
import { useState } from "react";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Ads() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);

        setTimeout(() => {
            setIsVisible(true);
        }, 20000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-[50px] padding w-full flex md:justify-center items-center md:space-x-40 text-[12px] md:text-base bg-center bg-no-repeat bg-cover justify-between"
                    style={{
                        backgroundImage: "url('/Abstract.svg')"
                    }}
                >
                    <div className="flex items-center">
                        <Image src="/icon/sparks.png" alt="sparks" width={20} height={20} />
                        <p className="capitalize">discover your dream property with estatein.</p>
                        <a href="#" className="pl-2 capitalize underline underline-offset-2 hover:text-primary">
                            learn more
                        </a>
                    </div>

                    <span className="cursor-pointer group" onClick={handleClose}>
                        <CircleX size={18} className="group-hover:text-primary transition-all group-hover:rotate-180" />
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
