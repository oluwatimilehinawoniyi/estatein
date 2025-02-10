import { CircleX } from 'lucide-react';
import Image from "next/image";

export default function Ads() {
    return (
        <div className="h-[50px] padding w-full flex md:justify-center items-center md:space-x-40 text-[12px] md:text-base bg-center bg-no-repeat bg-cover justify-between"
            style={{
                backgroundImage: "url('/Abstract.svg')"
            }}
        >
            <div className="flex items-center">

                <Image src='/icon/sparks.png' alt="sparks" width={20} height={20} />
                <p className="capitalize">discover your dream property with estatein.</p>
                <a href="#" className="pl-2 capitalize underline underline-offset-2 hover:text-primary">learn more</a>
            </div>

            <span className='cursor-pointer group'>
                <CircleX size={18} className='group-hover:text-primary transition-all group-hover:rotate-180' />
            </span>
        </div>
    )
}
