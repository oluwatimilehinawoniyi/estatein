"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./atoms/Button";
import { ElementType } from "react";
import HeaderTextComponent from "./atoms/HeaderTextComponent";
import UIWrapper from "./atoms/UIWrapper";
import { useSlider } from "@/hooks/useSlider";

interface UIMapperComponentProps<T> {
    title: string;
    description: string;
    button: string | null;
    data: T[];
    Component: ElementType;
}

export default function UIMapperComponent<T>({ title, description, button, data, Component }: UIMapperComponentProps<T>) {
    const { sliderRef, handleNext, handlePrev, currentIndex, totalSlides } = useSlider(data);

    return (
        <UIWrapper className="space-y-6 ">
            <HeaderTextComponent
                title={title}
                description={description}
                button={button}
            />
            <section className="overflow-hidden">
                <div
                    ref={sliderRef}
                    className="grid grid-flow-col grid-rows-1 gap-4 md:gap-6 overflow-x-scroll UI_Mapper">
                    {data?.map((item, index) => (
                        <Component key={index} {...item} />
                    ))}
                </div>
            </section>

            <div className="flex items-center justify-between">
                {button && <Button className="w-max md:hidden">{button}</Button>}
                <p className="hidden md:block">{currentIndex} of {totalSlides}</p>

                <div className="w-max justify-between md:justify-normal flex items-center gap-4">
                    <span onClick={handlePrev} className="border rounded-full p-1 cursor-pointer"><ArrowLeft /></span>
                    <p className="md:hidden">{currentIndex} of {totalSlides}</p>
                    <span onClick={handleNext} className="border rounded-full p-1 cursor-pointer"><ArrowRight /></span>
                </div>
            </div>
        </UIWrapper>
    )
}