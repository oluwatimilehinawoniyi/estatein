import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <button className={twMerge(" border-2 border-border transition-all ease-linear text-white px-4 py-2 rounded-lg capitalize", className)}>{children}</button>
    )
}
