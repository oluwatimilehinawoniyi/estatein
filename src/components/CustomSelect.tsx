"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CustomSelect({ options, placeholder }: { options: string[]; placeholder: React.ReactNode }) {
    const [selected, setSelected] = useState(placeholder);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                className="p-3 bg-background text-white rounded-md border border-border cursor-pointer flex justify-between items-center"
                onClick={() => setOpen(!open)}
            >
                {selected}
                <ChevronDown size={20} className={`${open ? 'rotate-180' : ''} transition-transform`} />
            </div>
            {open && (
                <ul className="absolute w-full bg-background border border-border overflow-hidden rounded-md mt-1 z-10">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="p-3 hover:bg-[#703bf7] hover:text-white cursor-pointer text-white/40"
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};