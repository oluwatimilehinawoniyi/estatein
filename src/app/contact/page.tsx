import HeaderTextComponent from "@/components/atoms/HeaderTextComponent";
import UIWrapper from "@/components/atoms/UIWrapper";
import CustomSelect from "@/components/CustomSelect";
import { PlainHero } from "@/components/Hero";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <PlainHero title="Get in touch with estatein" paragraph="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation." />

            <UIWrapper className=" bg-background border-border border drop-shadow-[0_0_4px_rgb(25,25,25)] p-2 rounded-xl h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2">

                {
                    [
                        { title: 'info@estatein.com', src: '/icon/mail.svg' }
                        , { title: '+1 (123) 456-7890', src: '/icon/phone.svg' }
                        , { title: 'Headquarters', src: '/icon/location.svg' }
                        , { title: 'website', src: '/icon/logo-mark.svg' }
                    ].map((item, index) => (
                        <div className="relative flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-background-grey gap-2 md:gap-4" key={index}>
                            <Image src={'icon/arrowAngle.svg'} alt="arrow" width={15} height={15} className="absolute right-4 top-4" />
                            <div className="">
                                <Image src={item.src} alt={item.title + 'icon'} className=" " width={25} height={25} />
                            </div>
                            <p className="text-center capitalize font-semibold text-xs md:text-sm lg:text-xl leading-[150%]">{item.title}</p>
                        </div>
                    ))
                }
            </UIWrapper>

            <UIWrapper className="space-y-6">
                <HeaderTextComponent button={null} title="let's connect" description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need." />

                <form className="bg-background border border-border p-4 md:p-8 rounded-lg w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">Email</label>
                            <input type="email" placeholder="Enter your Email" className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">Phone</label>
                            <input type="text" placeholder="Enter Phone Number" className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">Inquiry Type</label>
                            <CustomSelect
                                options={["Buying a Property", "Selling a Property", "Investment Opportunities", "General Inquiry", "Other"]}
                                placeholder="Select Inquiry Type"
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2 font-semibold md:text-lg">How Did You Hear About Us?</label>
                            <CustomSelect
                                options={["Google Search", "Social Media", "Referral", "Advertisement", "Other"]}
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-white mb-2 font-semibold md:text-lg">Message</label>
                        <textarea rows={5} placeholder="Enter your Message here.." className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border h-32 resize-none"></textarea>
                    </div>
                    <div className="flex mt-4 items-center justify-between flex-col md:flex-row gap-4">
                        <div className=" flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-white text-sm">
                                I agree with <a href="#" className="text-primary underline">Terms of Use</a> and <a href="#" className="text-primary underline">Privacy Policy</a>
                            </label>
                        </div>
                        <button type="submit" className=" bg-primary text-white p-3 rounded-md font-semibold w-full md:w-[unset]">
                            Send Your Message
                        </button>
                    </div>
                </form>
            </UIWrapper>

            {/* <UIWrapper className="space-y-6">
                <HeaderTextComponent title="discover our office locations" description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you" button={null} />
                <div className=""></div>
            </UIWrapper> */}
        </>
    )
}
