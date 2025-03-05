"use client";
import Button from "@/components/atoms/Button";
import { Bed, Bath, Home } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    type: string;
}

export default function PropertyCard({ id, image, title, description, price, bedrooms, bathrooms, type }: PropertyCardProps) {
    return (
        <div className="bg-background border border-border  rounded-xl p-4 min-w-[350px] w-[350px] md:w-[400px] md:min-w-[400px] space-y-4">
            <Image src={image} alt={title} width={100} height={100} className="rounded-[10px] w-full object-cover" />
            <div className="space-y-2">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{title}</h2>
                <p className="text-white/60 line-clamp-2 text-sm md:text-base">{description}</p>
            </div>

            <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center bg-background-grey border border-border text-white px-3 py-1 rounded-full gap-2 text-sm md:text-lg ">
                    <Bed size={16} />
                    <p className="">{bedrooms}-bedroom</p>
                </div>
                <div className="flex items-center bg-background-grey border border-border text-white px-3 py-1 rounded-full gap-2 text-sm md:text-lg ">
                    <Bath size={16} />
                    <p className="">{bathrooms}-bathroom</p>
                </div>
                <div className="flex items-center bg-background-grey border border-border text-white px-3 py-1 rounded-full gap-2 text-sm md:text-lg ">
                    <Home size={16} />
                    <p className="">{type}</p>
                </div>
            </div>

            <div className="flex items-end gap-4 justify-between">
                <div className="">
                    <p className="text-white/60 text-sm">Price</p>
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{Number(price).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
                </div>

                <Button href={`/properties/${id}`} className="w-max bg-primary">View Property Details</Button>
            </div>
        </div>
    );
}

