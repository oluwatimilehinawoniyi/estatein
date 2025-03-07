import HeaderTextComponent from "@/components/atoms/HeaderTextComponent"
import PropertyAdditionalDetails from "@/components/atoms/PropertyAdditionalDetails"
import PropertyAdditionalSingleCell from "@/components/atoms/PropertyAdditionalSingleCell"
import Stars from "@/components/atoms/Stars"
import UIWrapper from "@/components/atoms/UIWrapper"
import FAQCard from "@/components/FAQCard"
import PropertyGallery from "@/components/PropertyGallery"
import UIMapperComponent from "@/components/UIMapperComponent"
import { faqs } from "@/data/faq"
import { properties, Property } from "@/data/properties"
import { Bath, Bed, Grid2x2Check, MapPin, Zap } from "lucide-react"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const property: Property | undefined = properties?.find(p => p.id == slug);

    return <div className="space-y-6">
        <UIWrapper className="flex md:items-center justify-between gap-4 flex-col md:flex-row">
            <div className="text-white flex justify-between items-center gap-4">
                <h2 className="capitalize font-semibold text-xl leading-[150%] md:text-2xl lg:text-3xl ">{property?.title}</h2>
                <div className="flex items-center gap-2 py-1 px-2 border-border border bg-background capitalize rounded-md">
                    <MapPin size={18} />
                    <p className="font-medium text-sm">
                        {property?.location}
                    </p>
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-white/60 text-sm md:text-base font-medium">Price</p>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{Number(property?.price).toLocaleString("en-NG", {
                    style: "currency", currency: "NGN", minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })}</p>
            </div>

        </UIWrapper>

        <UIWrapper>
            <PropertyGallery />
        </UIWrapper>

        <UIWrapper className="flex min-[800px]:flex-row flex-col gap-4 items-start w-full">
            <div className="rounded-[10px] space-y-4 p-8 border border-border min-[800px]:w-1/2">
                <h2 className=" font-semibold text-lg md:text-xl lg:text-2xl">Description</h2>
                <p className="">Discover your own piece of paradise with the {property?.title}. With {property?.description}, this property is the epitome of exclusive living in the best of {property?.type}s.</p>
                <hr className="my-2 border border-background-grey" />
                <div className=" flex items-start flex-wrap justify-between gap-4">
                    <div className="space-y-2">
                        <span className="flex items-center gap-2 text-white/60 text-sm lg:text-base">
                            <Bed size={20} />
                            <p className="">Bedrooms</p>
                        </span>
                        <p className="font-semibold text-lg md:text-xl lg:text-2xl">{String(property?.bedrooms).padStart(2, "0")}</p>
                    </div>
                    <div className="space-y-2">
                        <span className="flex items-center gap-2 text-white/60 text-sm lg:text-base">
                            <Bath size={20} />
                            <p className="">Bathrooms</p>
                        </span>
                        <p className="font-semibold text-lg md:text-xl lg:text-2xl">{String(property?.bathrooms).padStart(2, "0")}</p>
                    </div>
                    <div className="space-y-2">
                        <span className="flex items-center gap-2 text-white/60 text-sm lg:text-base">
                            <Grid2x2Check size={20} />
                            <p className="">Area</p>
                        </span>
                        <p className="font-semibold text-lg md:text-xl lg:text-2xlcapitalize">{property?.area}</p>
                    </div>
                </div>
            </div>

            <div className="rounded-[10px] p-8 space-y-4 border border-border min-[800px]:w-1/2 w-full">
                <h2 className="capitalize font-semibold text-lg md:text-xl lg:text-2xl">key features and amenties</h2>

                <ul className="flex flex-col gap-4">
                    {["Expansive oceanfront terrace for outdoor entertaining",
                        "Gourmet kitchen with top-of-the-line appliances",
                        "Private beach access for morning strolls and sunset views",
                        "Master suite with a spa-inspired bathroom and ocean-facing balcony",
                        "Private garage and ample storage space"].map((item) => (
                            <li className="flex items-center gap-2 border-l-2 pl-4 border-primary py-2 bg-background-grey" key={item}>
                                <Zap size={18} fill="white" />
                                <p className="text-white/60">{item}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </UIWrapper>

        <UIWrapper className="space-y-6 flex md:items-start md:gap-8 flex-col md:flex-row">
            <div className="md:w-2/6 space-y-6">
                <Stars />
                <h1 className="capitalize text-[28px] md:text-[38px] font-semibold leading-[150%]">Inquire About {property?.title}</h1>
                <p className="font-medium text-sm md:text-base text-white/60">Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.</p>
            </div>
            <form className="md:w-4/6 bg-background border border-border p-4 md:p-8 rounded-lg w-full">
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
                </div>
                <div className="mt-4 md:mt-8">
                    <label className="block text-white mb-2 font-semibold md:text-lg">Selected Property</label>
                    <div className="w-full p-3 bg-background-grey text-white rounded-md border border-border flex items-center justify-between">
                        {property?.title}, {property?.location}
                        <MapPin size={20} />
                    </div>
                </div>
                <div className="mt-4 md:mt-8">
                    <label className="block text-white mb-2 font-semibold md:text-lg">Message</label>
                    <textarea rows={5} placeholder="Enter your Message here.." className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border h-32 resize-none"></textarea>
                </div>
                <div className="flex mt-4 md:mt-8 lg:items-center justify-between flex-col lg:flex-row gap-4">
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-white text-sm">
                            I agree with <a href="#" className="text-primary underline">Terms of Use</a> and <a href="#" className="text-primary underline">Privacy Policy</a>
                        </label>
                    </div>
                    <button type="submit" className="bg-primary text-white p-3 rounded-md font-semibold w-full md:w-[unset]">
                        Send Your Message
                    </button>
                </div>
            </form>
        </UIWrapper>

        <UIWrapper className="space-y-8">
            <HeaderTextComponent button={null}
                title="comprehensive pricing details"
                description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
            />

            <div className="border border-border rounded-xl p-4 md:py-2 flex flex-col md:flex-row items-center gap-4 bg-background-grey">
                <h2 className="font-semibold md:text-xl w-full md:w-max text-primary pb-4 border-b md:pr-4 md:border-b-0 md:pb-0 md:border-r border-border capitalize ">note</h2>
                <p className="text-white/60 font-medium text-sm md:text-base">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="space-y-1 md:w-1/6 lg:w-1.5/6">
                    <p className="text-white/60 text-sm md:text-base">Listing Price</p>
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{Number(property?.price).toLocaleString("en-NG", {
                        style: "currency", currency: "NGN", minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })}</p>
                </div>

                <div className="w-full space-y-8 md:w-5/6 lg:w-5/6">
                    <PropertyAdditionalDetails
                        title="additional fees"
                        link="#">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <div className="border-b border-border last-of-type:border-b-0 pb-4 lg:pb-8 last-of-type:pb-0 grid md:grid-cols-2  gap-4">
                                <PropertyAdditionalSingleCell
                                    label="property transfer tax"
                                    value={Number(25000)}
                                    info="Based on the sale price and local regulations"
                                />
                                <PropertyAdditionalSingleCell
                                    label="legal fees"
                                    value={Number(3000)}
                                    info="Approximate cost for legal services, including title transfer"
                                    isLastChild={true}
                                />
                            </div>

                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid md:grid-cols-2 gap-4">
                                <PropertyAdditionalSingleCell
                                    label="home inspection"
                                    value={Number(500)}
                                    info="Recommended for due diligence"
                                />
                                <PropertyAdditionalSingleCell
                                    label="property insurance"
                                    value={Number(1200)}
                                    info="Annual cost for comprehensive property insurance"
                                    isLastChild={true}
                                />
                            </div>

                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid md:grid-cols-2 gap-4">
                                <PropertyAdditionalSingleCell
                                    label="mortgage fee"
                                    value={"varies"}
                                    info="If applicable, consult with your lender for specific details"
                                />
                            </div>
                        </div>
                    </PropertyAdditionalDetails>

                    <PropertyAdditionalDetails
                        title="monthly fees"
                        link="#">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid gap-4">
                                <PropertyAdditionalSingleCell
                                    label="property taxes"
                                    value={1250}
                                    info="Approximate monthly property tax based on the sale price and local rates"
                                />
                            </div>

                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid md:grid-cols-2 gap-4">
                                <PropertyAdditionalSingleCell
                                    label="homeowners' association fee"
                                    value={300}
                                    info="Monthly fee for common area maintenance and security"
                                />
                            </div>
                        </div>
                    </PropertyAdditionalDetails>

                    <PropertyAdditionalDetails
                        title="total initial cost"
                        link="#">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <div className="border-b border-border last-of-type:border-b-0 pb-4 lg:pb-8 last-of-type:pb-0 grid md:grid-cols-2  gap-4">
                                <PropertyAdditionalSingleCell
                                    label="listing price"
                                    value={1250000}
                                />
                                <PropertyAdditionalSingleCell
                                    label="additional fees"
                                    value={29700}
                                    info="Property transfer tax, legal fees, inspection, insurance"
                                    isLastChild={true}
                                />
                            </div>

                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid md:grid-cols-2 gap-4">
                                <PropertyAdditionalSingleCell
                                    label="down payment"
                                    value={250000}
                                    info="20%"
                                />
                                <PropertyAdditionalSingleCell
                                    label="mortgage amount"
                                    value={1000000}
                                    info="If applicable"
                                    isLastChild={true}
                                />
                            </div>
                        </div>
                    </PropertyAdditionalDetails>

                    <PropertyAdditionalDetails
                        title="monthly expenses"
                        link="#">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <div className="border-b border-border last-of-type:border-b-0 pb-4 lg:pb-8 last-of-type:pb-0 grid md:grid-cols-2  gap-4">
                                <PropertyAdditionalSingleCell
                                    label="property taxes"
                                    value={1250}
                                />

                                <PropertyAdditionalSingleCell
                                    label="homeowners' association"
                                    value={300}
                                    isLastChild={true}
                                />
                            </div>

                            <div className="border-b border-border last-of-type:border-b-0 pb-4 last-of-type:pb-0 grid md:grid-cols-2 gap-4">
                                <PropertyAdditionalSingleCell
                                    label="mortgage payment"
                                    value={"Varies"}
                                    info="If applicable; based on terms and interest rate"
                                />
                                <PropertyAdditionalSingleCell
                                    label="property insurance"
                                    value={100}
                                    info="Approximate monthly cost"
                                    isLastChild={true}
                                />
                            </div>
                        </div>
                    </PropertyAdditionalDetails>
                </div>
            </div>
        </UIWrapper>

        <UIMapperComponent
            title="frequently asked questions"
            description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            button={null}
            data={faqs}
            Component={FAQCard}
        />
    </div>
}