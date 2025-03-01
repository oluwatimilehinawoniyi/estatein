import Button from "./Button";

interface PropertyAdditionalDetailsProps {
    children: React.ReactNode;
    title: string;
    link?: string
}

export default function PropertyAdditionalDetails({ children, title, link }: PropertyAdditionalDetailsProps) {
    return (
        <div className="bg-background border border-border rounded-xl p-4 md:px-6 lg:p-8 space-y-4">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
                <h2 className="font-semibold text-white text-lg md:text-xl lg:text-2xl capitalize">
                    {title}
                </h2>

                <Button className="bg-background-grey" href={link}>learn more</Button>
            </div>
            <div className="">{children}</div>
        </div>
    )
}
