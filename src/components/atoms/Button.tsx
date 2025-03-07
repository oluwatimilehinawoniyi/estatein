import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    restProps?: any;
}

export default function Button({ children, className, restProps, onClick, href }: ButtonProps) {
    const baseClasses =
        "border-2 border-border text-center transition-all ease-linear text-white px-4 py-2 rounded-lg capitalize";

    if (href) {
        return (
            <Link href={href} prefetch={true} className={twMerge(baseClasses, className)}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={twMerge(baseClasses, className)} {...restProps}>
            {children}
        </button>
    );
}
