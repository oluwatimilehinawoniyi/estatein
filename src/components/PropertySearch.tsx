import Button from "./atoms/Button"
import UIWrapper from "./atoms/UIWrapper"
import CustomSelect from "./CustomSelect"
import { Calendar, Gem, Home, MapPin, Ruler, Search } from "lucide-react"

export default function PropertySearch() {
    return (
        <UIWrapper className="flex max-w-6xl gap-4 md:gap-0 flex-col items-center">
            <div className="flex items-center w-full max-w-4xl mx-auto px-3 py-2 rounded-t-lg rounded-b-lg md:rounded-b-none bg-background border-background-grey border-b-8 md:border-b-0 border-x-8 border-t-8">
                <input
                    type="text"
                    placeholder="Search For A Property"
                    className="flex-1 bg-transparent  text-white px-4 h-full outline-none placeholder-white/40"
                />
                <Button className="bg-primary text-white py-2 rounded-lg flex items-center gap-2">
                    <Search className="" size={20} />
                    <p className="hidden md:block">
                        Find Property
                    </p>
                </Button>
            </div>

            <div className="border-background-grey bg-background-grey p-2 rounded-lg border-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                <CustomSelect
                    options={["New York", "Los Angeles", "Chicago", "Houston", "Miami"]}
                    placeholder={<><MapPin className="" size={20} /> Location</>}
                />
                <CustomSelect
                    options={["Apartment", "House", "Villa", "Studio", "Office"]}
                    placeholder={<><Home className="" size={20} /> Property Type</>}
                />
                <CustomSelect
                    options={["$100k - $200k", "$200k - $500k", "$500k - $1M", "$1M+"]}
                    placeholder={<><Gem className="" size={20} /> Pricing Range</>}
                />
                <CustomSelect
                    options={["50 sqm - 100 sqm", "100 sqm - 200 sqm", "200 sqm+"]}
                    placeholder={<><Ruler className="" size={20} /> Property Size</>}
                />
                <CustomSelect
                    options={["Before 2000", "2000 - 2010", "2010 - 2020", "2020+"]}
                    placeholder={<><Calendar className="" size={20} /> Build Year</>}
                />
            </div>
        </UIWrapper >
    )
}
