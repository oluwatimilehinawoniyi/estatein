import Button from "@/components/atoms/Button";
import HeaderTextComponent from "@/components/atoms/HeaderTextComponent";
import Stars from "@/components/atoms/Stars";
import UIWrapper from "@/components/atoms/UIWrapper";
import { PlainHero } from "@/components/Hero";
import { servicesOne, servicesThree, servicesTwo } from "@/data/Services";
import Image from "next/image";

export default function Services() {
    return (
        <>
            <PlainHero
                title="elevate your real estate experience"
                paragraph="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            />
            <div className="space-y-10">
                <UIWrapper className="bg-background border-border border drop-shadow-[0_0_4px_rgb(25,25,25)] p-2 rounded-xl h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2">

                    {
                        [
                            { title: 'find your dream home', src: '/icon/stall.svg' }
                            , { title: 'valuable properties', src: '/icon/fund.svg' }
                            , { title: 'property management', src: '/icon/home.svg' }
                            , { title: 'profitable investment', src: '/icon/sun.svg' }
                        ].map((item, index) => (
                            <div className="relative flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-background-grey gap-2 md:gap-4" key={index}>
                                <Image src={'icon/arrowAngle.svg'} alt="arrow" width={15} height={15} className="absolute right-4 top-4" />
                                <div className="">
                                    <Image src={item.src} alt={item.title + 'icon'} className=" " width={25} height={25} />
                                </div>
                                <p className="sm:w-[96%] md:w-2/3 lg:w-1/2 text-center capitalize font-semibold text-sm md:text-base lg:text-xl leading-[150%]">{item.title}</p>
                            </div>
                        ))
                    }
                </UIWrapper>

                <UIWrapper className="space-y-6">
                    <HeaderTextComponent
                        title="unlock property value"
                        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
                        button={null}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {servicesOne.map((service) => (
                            <div
                                key={service.id}
                                className={`p-4 md:p-6 rounded-lg ${service.gridSpan == "single" ? "col-span-1" : "col-span-2"} bg-background-grey space-y-4 bg-no-repeat bg-cover`}
                                style={service.buttonText ? { backgroundImage: "url(/Abstract-hero.svg)" } : undefined}

                            >
                                <div className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-6">
                                        {
                                            service.icon &&
                                            <Image src={service.icon} alt={service.title} width={100} height={100} className="size-9" />
                                        }
                                        <h3 className={`text-white ${service.gridSpan == "double" ? 'text-2xl' : 'text-lg'} font-semibold capitalize`}>{service.title}</h3>
                                    </div>
                                    {service.buttonText && (
                                        <Button className="bg-background hover:bg-primary">
                                            {service.buttonText}
                                        </Button>
                                    )}
                                </div>
                                <p className={`text-white/60 ${service.gridSpan == "double" && 'md:w-4/5'}`}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </UIWrapper >


                <UIWrapper className="space-y-6">
                    <HeaderTextComponent
                        title="effortless property management"
                        description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
                        button={null}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {servicesTwo.map((service) => (
                            <div
                                key={service.id}
                                className={`p-4 md:p-6 rounded-lg ${service.gridSpan == "single" ? "col-span-1" : "col-span-2"} bg-background-grey space-y-4 bg-no-repeat bg-cover`}
                                style={service.buttonText ? { backgroundImage: "url(/Abstract-hero.svg)" } : undefined}

                            >
                                <div className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-6">
                                        {
                                            service.icon &&
                                            <Image src={service.icon} alt={service.title} width={100} height={100} className="size-9" />
                                        }
                                        <h3 className={`text-white ${service.gridSpan == "double" ? 'text-2xl' : 'text-lg'} font-semibold capitalize`}>{service.title}</h3>
                                    </div>
                                    {service.buttonText && (
                                        <Button className="bg-background hover:bg-primary">
                                            {service.buttonText}
                                        </Button>
                                    )}
                                </div>
                                <p className={`text-white/60 ${service.gridSpan == "double" && 'md:w-4/5'}`}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </UIWrapper >

                <UIWrapper className="space-y-6 flex md:items-end md:gap-8 flex-col md:flex-row">
                    <div className="md:w-2/6 space-y-6">
                        <Stars />
                        <h1 className="capitalize text-[28px] md:text-[38px] font-semibold leading-[150%]">smart investments, informed decisions</h1>
                        <p className="font-medium text-sm md:text-base text-white/60">Building a real estate portfolio requires a strategic approach. Estatein&apos;s Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                        <div className="rounded-lg p-8 space-y-4 bg-no-repeat bg-cover bg-center bg-background-grey"
                            style={{ backgroundImage: "url(/icon/Group.svg)" }}>
                            <h2 className="text-white text-xl  font-semibold capitalize">unlock your investment potential</h2>
                            <p className="text-white/60">
                                Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                            </p>
                            <Button className="w-full bg-background hover:bg-primary">learn more</Button>
                        </div>
                    </div>
                    <div className="md:w-4/6 grid grid-cols-2 grid-rows-2 gap-2 p-2 rounded-lg bg-background-grey">
                        {servicesThree.map(service => (
                            <div
                                key={service.id}
                                className="p-4 md:p-10 rounded-lg col-span-1 bg-background space-y-4 bg-no-repeat bg-cover"
                                style={service.buttonText ? { backgroundImage: "url(/Abstract-hero.svg)" } : undefined}
                            >
                                <div className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-6">
                                        {
                                            service.icon &&
                                            <Image src={service.icon} alt={service.title} width={100} height={100} className="size-9" />
                                        }
                                        <h3 className="text-white text-lg font-semibold capitalize">{service.title}</h3>
                                    </div>
                                </div>
                                <p className="text-white/60 ">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </UIWrapper>
            </div>
        </>
    )
}
