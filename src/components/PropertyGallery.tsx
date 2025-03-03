"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const images = [
    "/images/gallery/Image-1.webp",
    "/images/gallery/Image-2.webp",
    "/images/gallery/Image-3.webp",
    "/images/gallery/Image-4.webp",
    "/images/gallery/Image-5.webp",
    "/images/gallery/Image-6.webp",
    "/images/gallery/Image-7.webp",
    "/images/gallery/Image-8.webp",
    "/images/gallery/Image-9.webp",
    "/images/gallery/Image-10.webp",
    "/images/gallery/Image-11.webp",
];

export default function PropertyGallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full bg-background-grey p-4 md:p-8 lg:p-10 rounded-xl">
            <div className="flex flex-col gap-4">
                {/* Desktop / Tablet Layout */}
                <div className="order-2 hidden lg:grid h-[500px] grid-cols-2 gap-4">
                    <div className="relative">
                        <Image
                            src={images[activeIndex]}
                            alt="Property"
                            fill
                            className="w-full  object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={images[(activeIndex + 1) % images.length]}
                            fill
                            alt="Interior"
                            className="w-full h-[500px] object-center object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="order-1 lg:hidden h-[300px]">
                    <div className="relative size-full">
                        <Image
                            src={images[activeIndex]}
                            alt="Property"
                            fill
                            className="w-full object-center object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="order-2 md:order-1 flex items-center w-full gap-2 overflow-x-auto">
                    {images.map((src, index) => (
                        <div className="relative min-w-20 md:w-full h-14 lg:h-20" key={index} onClick={() => setActiveIndex(index)}>
                            <Image
                                src={src}
                                fill
                                alt="Thumbnail"
                                className={`size-full rounded-md object-cover cursor-pointer transition hover:border-white-all ${index === activeIndex ? "border-2 border-primary" : "opacity-50"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 bg-background w-max mx-auto px-3 py-2 rounded-full">
                <button
                    onClick={prevSlide}
                    className="border border-border p-1 rounded-full bg-background text-white hover:bg-background-grey transition hover:border-white size-10 flex items-center justify-center"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`h-1 min-[375px]:h-0.5 w-1 min-[375px]:w-2 md:w-4 rounded-full ${index === activeIndex ? "bg-primary" : "bg-white/60"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    className="border border-border p-1 rounded-full bg-background text-white hover:bg-background-grey transition hover:border-white size-10 flex items-center justify-center"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}
