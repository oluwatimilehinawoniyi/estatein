import Button from "./Button";
import Stars from "./Stars";

interface HeaderTextComponentProps {
    title: string;
    description: string;
    button: string | null;
}

export default function HeaderTextComponent({ title, description, button }: HeaderTextComponentProps) {
    return (
        <div className="space-y-6">
            <Stars />
            <div className="flex justify-between items-end">
                <div className="">
                    <h1 className="capitalize text-[28px] md:text-[38px] font-semibold leading-[150%]">{title}</h1>
                    <p className="font-medium text-sm md:text-base md:w-4/5 text-white/60">{description}</p>
                </div>
                {button && <Button className="hidden md:block w-max bg-background-grey">{button}</Button>}
            </div>
        </div>
    )
}
