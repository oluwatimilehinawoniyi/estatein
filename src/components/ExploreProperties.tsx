import Image from "next/image";
import Button from "./atoms/Button";

export default function ExploreProperties() {
    return (
        <section className="padding">
            <div className="bg-backgrond py-10 relative flex items-center flex-col gap-6 md:flex-row justify-between max-w-[1400px] mx-auto bg-right-bottom bg-contain bg-no-repeat"
                style={{ backgroundImage: "url(/eploreAbstract1.svg)" }}
            >
                <Image src={'/exploreAbstract2.svg'} fill alt="abstract design" className="object-cover" />
                <div className="flex flex-col space-y-2 z-20 relative md:w-2/3">
                    <h1 className="md:text-[34px] font-semibold text-[24px] leading-[120%] capitalize">Start Your Real Estate Journey Today</h1>

                    <p className="text-white/60  font-medium text-sm md:text-base">Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Button href="/properties" className="relative z-20 bg-primary hover:bg-background hover:border-primary w-full md:py-4 md:w-[unset]">explore properties</Button>

            </div>
        </section>
    )
}
