import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="padding">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-col gap-4">
          <div className="">
            <Image src="/images/hero.png" alt="hero" className="bg-center bg-cover bg-no-repeat rounded-2xl border border-white/5" width={1000} height={100} style={{ backgroundImage: "url(/Abstract-hero.svg)" }} />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="lg:text-[46px] font-semibold text-[28px] leading-[120%] capitalize">Discover your dream property with estatein</h1>
              <p className="">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button className="bg-background hover:bg-primary w-full">learn more</Button>
              <Button className="bg-primary hover:bg-background hover:border-primary w-full">browse properties</Button>
            </div>

            <div className="grid grid-rows-2 grid-cols-2 w-full gap-4">
              {
                [{ numbers: 200, title: 'happy customers' }, { numbers: 435, title: 'properties for clients' }, { numbers: 16, title: 'years of experience' }].map(({ numbers, title }, index) => (
                  <div className={`rounded-lg w-full flex items-center justify-center flex-col px-2 py-3 bg-background-grey ${index == 2 ? 'col-span-2' : ''}`} key={numbers}>
                    <h2 className="text-2xl font-bold ">{numbers}{index == 1 && 'k'}+</h2>
                    <p className="text-white/60 capitalize font-medium text-sm">{title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="bg-background border-border border drop-shadow-[0_0_4px_rgb(25,25,25)] rounded-xl h-auto grid grid-cols-2 grid-rows-2">
          {
            [
              { title: 'find your dream home', src: '/icon/stall.svg' }
              , { title: 'unlock property value', src: '/icon/fund.svg' }
              , { title: 'effortless property management', src: '/icon/home.svg' }
              , { title: 'smart investments, informed decision', src: '/icon/sun.svg' }
            ].map((item, index) => (
              <div className="relative flex flex-col" key={index}>
                <Image src={'icon/arrowAngle.svg'} alt="arrow" width={20} height={20} className="absolute right-4 top-4" />
                <div className="">
                  <Image src={item.src} alt={item.title + 'icon'} className=" " width={30} height={30} />
                </div>
                <p className="text-center capitalize font-semibold text-sm leading-[150%]">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
