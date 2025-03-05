"use client"
import React, { ElementType } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButtons'
import {
    SelectedSnapDisplay,
    useSelectedSnapDisplay
} from './CarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType<T> = {
    slides: T[]
    options?: EmblaOptionsType
    Component: ElementType;
}

export default function Carousel<T>(props: PropType<T>) {
    const { slides, options, Component } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container grid grid-flow-col grid-rows-1 gap-4 md:gap-6 overflow-x-scroll UI_Mapper">
                    {slides.map((item, index) => (
                        <Component key={index} {...item} />
                    ))}
                </div>
            </div>

            <div className="embla__controls flex items-center gap-4 justify-between">
                <SelectedSnapDisplay
                    selectedSnap={selectedSnap}
                    snapCount={snapCount}
                />
                <div className="flex items-center gap-4">
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
        </section>
    )
}

