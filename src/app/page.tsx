import FAQCard from "@/components/FAQCard";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/Testimonial";
import UIMapperComponent from "@/components/UIMapperComponent";
import { faqs } from "@/data/faq";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-8 py-8">

        <UIMapperComponent
          title="featured properties"
          description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
          button="view all properties"
          data={properties}
          Component={PropertyCard}
        />

        <UIMapperComponent
          title="what our clients say"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          button="view all testimonials"
          data={testimonials}
          Component={TestimonialCard}
        />

        <UIMapperComponent
          title="frequently asked questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          button="view all FAQs"
          data={faqs}
          Component={FAQCard}
        />
      </div>
    </>
  );
}