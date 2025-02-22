import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export default function Button({ children, className, onClick, href }: ButtonProps) {
    const baseClasses =
        "border-2 border-border text-center transition-all ease-linear text-white px-4 py-2 rounded-lg capitalize";

    if (href) {
        return (
            <Link href={href} className={twMerge(baseClasses, className)}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={twMerge(baseClasses, className)}>
            {children}
        </button>
    );
}
