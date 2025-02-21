export interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  price: number;
  location: string;
  area: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    image: "/images/properties/Image.png",
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
    price: 550000,
    location: "Miami, FL",
    area: "3,200 sqft",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    image: "/images/properties/Image-1.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    price: 450000,
    location: "New York, NY",
    area: "1,500 sqft",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    image: "/images/properties/Image-2.png",
    bedrooms: 3,
    bathrooms: 2.5,
    type: "Townhouse",
    price: 500000,
    location: "San Francisco, CA",
    area: "2,000 sqft",
  },
  {
    id: 4,
    title: "Lakeside Bliss Bungalow",
    description:
      "A cozy 2-bedroom bungalow with breathtaking lakeside views...",
    image: "/images/properties/Image.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Bungalow",
    price: 400000,
    location: "Austin, TX",
    area: "1,800 sqft",
  },
  {
    id: 5,
    title: "Skyline Luxury Penthouse",
    description:
      "An exclusive 3-bedroom penthouse with 360-degree city skyline views...",
    image: "/images/properties/Image-1.png",
    bedrooms: 3,
    bathrooms: 3,
    type: "Penthouse",
    price: 950000,
    location: "Chicago, IL",
    area: "4,500 sqft",
  },
  {
    id: 6,
    title: "Countryside Manor",
    description:
      "A grand 5-bedroom estate with sprawling gardens and modern interiors...",
    image: "/images/properties/Image-2.png",
    bedrooms: 5,
    bathrooms: 4,
    type: "Estate",
    price: 1200000,
    location: "Nashville, TN",
    area: "5,800 sqft",
  },
  {
    id: 7,
    title: "Urban Loft Retreat",
    description:
      "A trendy and spacious 1-bedroom loft in the heart of downtown...",
    image: "/images/properties/Image.png",
    bedrooms: 1,
    bathrooms: 1,
    type: "Loft",
    price: 300000,
    location: "Los Angeles, CA",
    area: "1,200 sqft",
  },
  {
    id: 8,
    title: "Coastal Dream House",
    description:
      "A luxurious 4-bedroom beachfront property with private access to the ocean...",
    image: "/images/properties/Image-1.png",
    bedrooms: 4,
    bathrooms: 3,
    type: "Beach House",
    price: 1100000,
    location: "Malibu, CA",
    area: "3,800 sqft",
  },
  {
    id: 9,
    title: "Mountain Escape Chalet",
    description:
      "A rustic yet modern 3-bedroom chalet nestled in a scenic mountain range...",
    image: "/images/properties/Image-2.png",
    bedrooms: 3,
    bathrooms: 2,
    type: "Chalet",
    price: 600000,
    location: "Aspen, CO",
    area: "2,500 sqft",
  },
  {
    id: 10,
    title: "Eco-Friendly Smart Home",
    description:
      "A futuristic 2-bedroom smart home designed with sustainability in mind...",
    image: "/images/properties/Image.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Smart Home",
    price: 700000,
    location: "Seattle, WA",
    area: "2,200 sqft",
  },
];
