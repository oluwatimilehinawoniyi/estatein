import { useRef, useState } from "react";

export function useSlider<T>(data: T[]) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    const totalSlides = data.length;

    const handleNext = () => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const scrollAmount = slider.clientWidth; // Scroll by one full view
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setCurrentIndex((prev) => Math.min(prev + 1, totalSlides));
    };

    const handlePrev = () => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const scrollAmount = slider.clientWidth;
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });

        setCurrentIndex((prev) => Math.max(prev - 1, 1));
    };

    return { sliderRef, handleNext, handlePrev, currentIndex, totalSlides };
}
