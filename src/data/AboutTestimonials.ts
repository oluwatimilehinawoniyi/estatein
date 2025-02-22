export interface aboutTestimonial {
  id: number;
  year: number;
  company: string;
  domain: string;
  category: string;
  testimonial: string;
  website: string;
}

export const aboutTestimonials: aboutTestimonial[] = [
  {
    id: 1,
    year: 2019,
    company: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: "https://abc-corp.com",
  },
  {
    id: 2,
    year: 2018,
    company: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: "https://greentech.com",
  },
  {
    id: 3,
    year: 2021,
    company: "BlueWave Solutions",
    domain: "Technology & Innovation",
    category: "AI & Cloud Computing",
    testimonial:
      "Their strategic insights and tech solutions have been game-changers for our digital transformation journey. Highly recommended!",
    website: "https://bluewave.io",
  },
  {
    id: 4,
    year: 2017,
    company: "Summit Financial",
    domain: "Finance & Investments",
    category: "Wealth Management",
    testimonial:
      "The financial planning expertise they provide has been crucial in helping our clients grow and protect their wealth.",
    website: "https://summitfinance.com",
  },
  {
    id: 5,
    year: 2020,
    company: "NovaHealth",
    domain: "Healthcare",
    category: "Telemedicine",
    testimonial:
      "With their support, we've been able to scale our telemedicine services and reach more patients with quality healthcare solutions.",
    website: "https://novahealth.com",
  },
];
