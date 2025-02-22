import { aboutTestimonial } from "@/data/AboutTestimonials";
import { Testimonial } from "@/data/testimonials";
import { LayoutGrid, Star, Zap } from "lucide-react";
import Image from "next/image";
import Button from "./atoms/Button";

export function TestimonialCardOne({
    rating,
    review,
    name,
    location,
    image,
}: Testimonial) {
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
            <h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-[150%]">{name}</h3>
            <p className="line-clamp-4 font-medium leading-[150%]">{review}
            </p>
            <div className="flex items-center gap-3">
                <Image src={image} alt={name} width={10} height={10} className="w-10 h-10 rounded-full" />
                <div className="">
                    <p className="font-medium text-base md:text-lg">{name}</p>
                    <p className="text-white/60 text-sm lg:text-base font-medium">{location}</p>
                </div>
            </div>
        </div>
    );
}


export function TestimonialCardTwo({ category, company, domain, testimonial, website, year }: aboutTestimonial) {
    return (
        <div className="bg-background border-border border rounded-2xl text-white min-w-[320px] w-[320px] md:w-[430px] md:min-w-[430px] lg:w-[450px] lg:min-w-[450px] p-4 max-w-lg flex flex-col gap-6 justify-between">
            <div className="flex justify-between items-end gap-4">
                <div className="space-y-1">
                    <p className="capitalize text-sm md:text-base font-medium leading-[150%] text-white/60">Since {year}</p>
                    <h1 className="font-semibold text-xl md:text-2xl leading-[150%]">{company}</h1>
                </div>
                <Button href={website} className="bg-background-grey">visit website</Button>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1 md:border-r border-border md:w-1/2">
                    <div className="flex items-center gap-2 capitalize text-sm text-white/60">
                        <LayoutGrid size={18} />
                        <p className="text-sm md:text-base  font-medium leading-[150%]">domain</p>
                    </div>
                    <p className="text-sm md:text-base font-medium leading-[150%] capitalize">{domain}</p>
                </div>

                <div className="space-y-1 md:w-1/2">
                    <div className="flex items-center gap-2 capitalize text-sm text-white/60">
                        <Zap size={18} />
                        <p className="text-sm md:text-base font-medium leading-[150%]">category</p>
                    </div>
                    <p className="text-sm md:text-base font-medium leading-[150%] capitalize line-clamp-1">{category}</p>
                </div>

            </div>
            <div className="border border-border p-4 space-y-1 rounded-lg">
                <p className="capitalize text-sm md:text-base font-medium leading-[150%] text-white/60">what they said</p>
                <p className="font-semibold text-sm md:text-base line-clamp-3">{testimonial}</p>
            </div>
        </div>
    )
}