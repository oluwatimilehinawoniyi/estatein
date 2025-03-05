"use client";
import Button from "@/components/atoms/Button";

interface FAQCardProps {
    question: string;
    answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
    return (
        <div className="bg-background text-white p-4 border-border border rounded-2xl min-w-[320px] w-[320px] md:w-[350px] md:min-w-[350px] lg:w-[380px] lg:min-w-[380px] flex flex-col gap-4 justify-between items-start leading-[150%] h-[225px]">
            <h3 className="text-lg md:text-lg lg:text-xl font-semibold line-clamp-2">{question}</h3>
            <p className="text-white/60 line-clamp-2 font-medium text-sm md:text-base ">{answer}</p>
            <Button className="">Read More</Button>
        </div>
    );
}
