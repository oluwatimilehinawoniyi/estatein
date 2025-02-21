import Button from "@/components/atoms/Button";
import { Bed, Bath, Home } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    type: string;
}

export default function PropertyCard({ image, title, description, price, bedrooms, bathrooms, type }: PropertyCardProps) {
    return (
        <div className="bg-background border border-border  rounded-xl p-4 min-w-[350px] w-[350px] md:w-[410px] md:min-w-[410px] lg:w-[420px] lg:min-w-[420px] space-y-4">
            <Image src={image} alt={title} width={100} height={100} className="rounded-[10px] w-full object-cover" />
            <div className="">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{title}</h2>
                <p className="text-white/60 text-sm md:text-base lg:text-lg">{description} <span className="text-primary cursor-pointer">Read More</span></p>
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

                <Button className="w-max bg-primary md:px-6">View Property Details</Button>
            </div>
        </div>
    );
}

// Example usage:
// <PropertyCard 
//   image="property.jpg" 
//   title="Metropolitan Haven" 
//   description="A chic and fully-furnished 2-bedroom apartment with panoramic city views..."
//   price="$550,000"
//   details=[
//     { icon: <Bed size={16} />, label: "2-Bedroom" },
//     { icon: <Bath size={16} />, label: "2-Bathroom" },
//     { icon: <Home size={16} />, label: "Villa" }
//   ]
// />
