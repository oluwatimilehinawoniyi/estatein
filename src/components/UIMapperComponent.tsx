import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./atoms/Button";
import Stars from "./atoms/Stars";
import { ElementType } from "react";
// import { motion } from "framer-motion";
// import { motion } from "motion/react"


interface UIMapperComponentProps<T> {
    title: string;
    description: string;
    button: string;
    data: T[];
    Component: ElementType;
}

export default function UIMapperComponent<T>({ title, description, button, data, Component }: UIMapperComponentProps<T>) {
    return (
        <section className="padding">
            <div className="space-y-6 max-w-7xl mx-auto">
                <Stars />
                <div className="flex justify-between items-end">
                    <div className="md:w-2/3">
                        <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[28px] font-semibold leading-[150%]">{title}</h1>
                        <p className="font-medium text-sm md:text-base lg:text-lg text-white/60">{description}</p>
                    </div>
                    <Button className="hidden md:block w-max">{button}</Button>
                </div>
                <section className="overflow-hidden">
                    <div
                        // drag="x"
                        // dragConstraints={{ left: -300, right: 0 }}
                        className="grid grid-flow-col grid-rows-1 gap-4 md:gap-6 overflow-x-scroll UI_Mapper cursor-grab active:cursor-grabbing">
                        {data?.map((item, index) => (
                            <Component key={index} {...item} />
                        ))}
                    </div>
                </section>

                <div className="flex items-center justify-between">
                    <Button className="w-max md:hidden">{button}</Button>
                    <p className="hidden md:block">01 of 10</p>

                    <div className="flex items-center gap-4">
                        <span className="border rounded-full p-1 cursor-pointer"><ArrowLeft /></span>
                        <p className="md:hidden">01 of 10</p>
                        <span className="border rounded-full p-1 cursor-pointer"><ArrowRight /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
