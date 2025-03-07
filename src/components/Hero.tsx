import Button from "@/components/atoms/Button";
import Image from "next/image";
import Stars from "./atoms/Stars";
import UIWrapper from "./atoms/UIWrapper";
import CircularBanner from "./atoms/CircularBanner";

export function Hero() {
    return (
        <UIWrapper className="space-y-4  md:pt-12 lg:mt-0">
            <div className="flex md:flex-row-reverse flex-col gap-4 py-4 md:h-[480px] md:items-end md:gap-8">
                <div className="overflow-hidden relative w-full h-[300px] md:h-full">
                    <Image src="/images/hero.png" alt="hero" className="bg-center object-cover object-center bg-cover bg-no-repeat rounded-2xl border border-white/5" fill style={{ backgroundImage: "url(/Abstract-hero.svg)" }} />
                </div>
                <div className="w-full flex flex-col gap-4 justify-between relative pt-4 md:pt-0 md:gap-8">
                    <CircularBanner />




                    <div className="space-y-2">
                        <h1 className="lg:text-[46px] md:text-[38px] font-semibold text-[28px] leading-[120%] capitalize md:w-5/6 lg:w-4/5">Discover your dream property with estatein</h1>
                        <p className="md:w-4/5 text-white/60">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>
                    <div className="flex flex-col lg:w-2/3 items-center md:flex-row gap-4">
                        <Button href="/about" className="bg-background hover:bg-primary w-full md:py-4 md:px-2 lg:px-4">learn more</Button>
                        <Button href="/properties" className="bg-primary hover:bg-background hover:border-primary w-full md:py-4 md:px-2 lg:px-4">browse properties</Button>
                    </div>

                    <div className="grid grid-rows-2 grid-cols-2 w-full gap-4 md:grid-cols-3 md:grid-rows-1">
                        {
                            [{ numbers: 200, title: 'happy customers' }, { numbers: 435, title: 'properties for clients' }, { numbers: 16, title: 'years of experience' }].map(({ numbers, title }, index) => (
                                <div className={`rounded-lg w-full flex items-center justify-center flex-col px-2 py-3 bg-background-grey md:py-6 ${index == 2 ? 'col-span-2 md:col-span-1' : ''}`} key={numbers}>
                                    <h2 className="text-2xl font-bold ">{numbers}{index == 1 && 'k'}+</h2>
                                    <p className="text-white/60 capitalize font-medium text-sm text-center">{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bg-background border-border border drop-shadow-[0_0_4px_rgb(25,25,25)] p-2 rounded-xl h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2">
                {
                    [
                        { title: 'find your dream home', src: '/icon/stall.svg' }
                        , { title: 'valuable properties', src: '/icon/fund.svg' }
                        , { title: 'property management', src: '/icon/home.svg' }
                        , { title: 'profitable investments', src: '/icon/sun.svg' }
                    ].map((item, index) => (
                        <div className="relative flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-background-grey gap-2 md:gap-4" key={index}>
                            <Image src={'icon/arrowAngle.svg'} alt="arrow" width={15} height={15} className="absolute right-4 top-4" />
                            <div className="">
                                <Image src={item.src} alt={item.title + 'icon'} className="" width={25} height={25} />
                            </div>
                            <p className="sm:w-[96%] md:w-2/3 lg:w-1/2 text-center capitalize font-semibold text-sm md:text-base lg:text-xl leading-[150%]">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </UIWrapper >
    )
}
export function AboutHero() {
    return (
        <UIWrapper className="space-y-4">
            <div className="flex md:flex-row-reverse flex-col gap-4 py-4 md:h-[480px] md:items-end md:gap-8">
                <div className="overflow-hidden relative w-full h-[300px] md:h-full">
                    <Image src="/images/about.png" alt="hero" className="bg-center object-cover object-center bg-cover bg-no-repeat rounded-2xl border border-white/5" fill style={{ backgroundImage: "url(/Abstract-hero.svg)" }} />
                </div>
                <div className="w-full flex flex-col gap-4 justify-between relative pt-4 md:pt-0 md:gap-8">
                    <div className="space-y-2">
                        <Stars />
                        <h1 className="lg:text-[46px] md:text-[38px] font-semibold text-[28px] leading-[120%] capitalize md:w-4/5">our journey</h1>
                        <p className="text-white/60 md:w-4/5">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 w-full gap-4 md:grid-cols-3 md:grid-rows-1">
                        {
                            [{ numbers: 200, title: 'happy customers' }, { numbers: 435, title: 'properties for clients' }, { numbers: 16, title: 'years of experience' }].map(({ numbers, title }, index) => (
                                <div className={`rounded-lg w-full flex items-center justify-center flex-col px-2 py-3 bg-background-grey md:py-6 ${index == 2 ? 'col-span-2 md:col-span-1' : ''}`} key={numbers}>
                                    <h2 className="text-2xl font-bold ">{numbers}{index == 1 && 'k'}+</h2>
                                    <p className="text-white/60 capitalize font-medium text-sm text-center">{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </UIWrapper>
    )
}

export function PlainHero({ title, paragraph }: { title: string, paragraph: string }) {
    return (

        <UIWrapper className="py-10 md:py-16 flex items-start justify-center bg-background">
            <div className="space-y-6">
                <h1 className="capitalize text-[28px] md:text-[38px] font-semibold ">{title}</h1>
                <p className="text-sm md:text-base text-white/60 leading-[150%] lg:w-4/6">{paragraph}</p>
            </div>
        </UIWrapper>
    )
}