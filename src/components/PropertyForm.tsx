import React from 'react'
import HeaderTextComponent from './atoms/HeaderTextComponent'
import CustomSelect from './CustomSelect'
import UIWrapper from './atoms/UIWrapper'
import ContactMethod from './ContactMethod'

export default function PropertyForm() {
    return (
        <UIWrapper className="space-y-6">
            <HeaderTextComponent
                title="let's make it happen"
                description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don' t wait; let's embark on this exciting journey together."
                button={null}
            />

            <form className="bg-background border border-border p-4 md:p-8 rounded-lg w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">Preferred Location</label>
                        <CustomSelect options={["New York", "Los Angeles", "Chicago", "Houston", "Miami"]} placeholder="Select Location" />
                    </div>
                    <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">Property Type</label>
                        <CustomSelect options={["Apartment", "House", "Condo", "Townhouse", "Villa"]} placeholder="Select Property Type" />
                    </div>
                    <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">No. of Bathrooms</label>
                        <CustomSelect options={["1", "2", "3", "4+"]} placeholder="Select no. of Bathrooms" />
                    </div>
                    <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">No. of Bedrooms</label>
                        <CustomSelect options={["1", "2", "3", "4+"]} placeholder="Select no. of Bedrooms" />
                    </div>
                    <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">Budget</label>
                        <CustomSelect options={["$50k - $100k", "$100k - $300k", "$300k - $500k", "$500k+"]} placeholder="Select Budget" />
                    </div>
                    {/* <div>
                        <label className="block text-white mb-2 font-semibold md:text-lg">Preferred Contact Method</label>
                        <div className="flex items-center gap-8">
                            <button type="button" className="flex items-center gap-4 bg-background-grey p-3 rounded-md border border-border w-full text-white">
                                <Phone size={20} /> Enter Your Number
                            </button>
                            <button type="button" className="flex items-center gap-4 bg-background-grey p-3 rounded-md border border-border w-full text-white">
                                <Mail size={20} /> Enter Your Email
                            </button>
                        </div>
                    </div> */}
                    <ContactMethod />
                </div>
                <div className="mt-4">
                    <label className="block text-white mb-2 font-semibold md:text-lg">Message</label>
                    <textarea rows={5} placeholder="Enter your Message here.." className="w-full p-3 bg-background-grey focus:ring-primary placeholder:text-white/20 focus:ring-1 outline-none text-white rounded-md border border-border h-32 resize-none"></textarea>
                </div>
                <div className="flex mt-4 items-center justify-between flex-col md:flex-row gap-4">
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
    )
}
