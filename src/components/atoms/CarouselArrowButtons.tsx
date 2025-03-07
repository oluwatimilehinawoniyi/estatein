"use client"
import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from './Button'

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <>
            <Button
                className="disabled:opacity-50 flex size-12 items-center justify-center border rounded-full cursor-pointer p-1"
                restProps={restProps}
            >
                <ArrowLeft />
                {children}
            </Button>
        </>
    )
}

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <Button
            restProps={restProps}
            className="disabled:opacity-50 flex size-12 items-center justify-center border rounded-full cursor-pointer p-1"
        >
            <ArrowRight />
            {children}
        </Button>
    )
}
