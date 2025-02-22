// Desc: UI Wrapper to keep the content of the UI at a max-w-[1400px] and give it inline padding.

import { twMerge } from 'tailwind-merge';

export default function UIWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className="padding">
            <div className={twMerge("max-w-[1400px] mx-auto", className)}>{children}</div>
        </section>
    )
}