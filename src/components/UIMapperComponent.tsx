import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./atoms/Button";
import { ElementType } from "react";
import HeaderTextComponent from "./atoms/HeaderTextComponent";
import UIWrapper from "./atoms/UIWrapper";

interface UIMapperComponentProps<T> {
    title: string;
    description: string;
    button: string | null;
    data: T[];
    Component: ElementType;
}

export default function UIMapperComponent<T>({ title, description, button, data, Component }: UIMapperComponentProps<T>) {
    return (
        <UIWrapper className="space-y-6 ">
            <HeaderTextComponent
                title={title}
                description={description}
                button={button}
            />
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
                {button && <Button className="w-max md:hidden">{button}</Button>}
                <p className="hidden md:block">01 of 10</p>

                <div className="w-full md:w-max justify-between md:justify-normal flex items-center gap-4">
                    <span className="border rounded-full p-1 cursor-pointer"><ArrowLeft /></span>
                    <p className="md:hidden">01 of 10</p>
                    <span className="border rounded-full p-1 cursor-pointer"><ArrowRight /></span>
                </div>
            </div>
        </UIWrapper>
    )
}
