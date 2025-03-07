"use client"
import Button from "./atoms/Button";
import { ElementType } from "react";
import HeaderTextComponent from "./atoms/HeaderTextComponent";
import UIWrapper from "./atoms/UIWrapper";
import { NextButton, PrevButton, usePrevNextButtons } from "./atoms/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./atoms/CarouselSelectedSnapDisplay";

interface UIMapperComponentProps<T extends { id?: string | number }> {
    title: string;
    description: string;
    button: string | null;
    data: T[];
    Component: ElementType;
}

export default function UIMapperComponent<T extends { id?: string | number | undefined; }>({ title, description, button, data, Component }: UIMapperComponentProps<T>) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

    return (
        <UIWrapper className="space-y-6 ">
            <HeaderTextComponent
                title={title}
                description={description}
                button={button}
            />
            <section className="overflow-hidden" ref={emblaRef}>
                <div className="UI_Mapper flex touch-pinch-zoom touch-pan-y gap-4 md:gap-6">
                    {data?.map((item, index) => (
                        <Component key={item.id !== undefined ? item.id : index} {...item} />
                    ))}
                </div>
            </section>

            <div className="flex items-center justify-between gap-4">
                {button && <Button className="w-max md:hidden">{button}</Button>}
                <div className="hidden md:block">
                    <SelectedSnapDisplay
                        selectedSnap={selectedSnap}
                        snapCount={snapCount}
                    />
                </div>

                <div className="w-max justify-between md:justify-normal flex items-center gap-4">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <div className="md:hidden">
                        <SelectedSnapDisplay
                            selectedSnap={selectedSnap}
                            snapCount={snapCount}
                        />
                    </div>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </UIWrapper>
    )
}