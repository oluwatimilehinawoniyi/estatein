import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
    rating: number;
    title: string;
    review: string;
    name: string;
    location: string;
    image: string;
}

export default function TestimonialCard({
    rating,
    title,
    review,
    name,
    location,
    image,
}: TestimonialProps) {
    return (
        <div className="bg-background border-border border rounded-2xl text-white min-w-[320px] w-[320px] md:w-[350px] md:min-w-[350px] lg:w-[380px] lg:min-w-[380px] p-4 max-w-lg space-y-6">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={
                            index < rating ? "text-yellow-500" : "text-gray-700"
                        }
                        fill={index < rating ? "currentColor" : "none"}
                        size={20}
                        strokeWidth={1.5}
                    />
                ))}
            </div>
            <h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-[150%]">{title}</h3>
            <p className="line-clamp-4 font-medium leading-[150%]">{review}
            </p>
            <div className="flex items-center gap-3">
                <Image src={image} alt={name} width={10} height={10} className="w-10 h-10 rounded-full" />
                <div className="">
                    <p className="font-medium text-base md:text-lg lg:text-xl">{name}</p>
                    <p className="text-white/60 text-sm lg:text-base font-medium">{location}</p>
                </div>
            </div>
        </div>
    );
}
