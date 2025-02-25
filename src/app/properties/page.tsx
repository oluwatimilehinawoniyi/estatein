import { PlainHero } from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import PropertyForm from "@/components/PropertyForm";
import PropertySearch from "@/components/PropertySearch";
import UIMapperComponent from "@/components/UIMapperComponent";
import { properties } from "@/data/properties";

export default function Properties() {
    return (
        <div className="space-y-6 relative">
            <PlainHero
                title="find your dream property"
                paragraph="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
            />

            <PropertySearch />

            <UIMapperComponent
                title="discover a world of possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                button={null}
                data={properties}
                Component={PropertyCard}
            />

            <PropertyForm />
        </div>
    )
}
