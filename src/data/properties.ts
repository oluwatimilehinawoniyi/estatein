export interface Property {
  id: string;
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
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    image: "/images/properties/Image.png",
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
    price: 550000,
    location: "Miami, FL",
    area: "3,200 sqft",
  },
  {
    id: "c9d3a534-1a20-4d2c-a9a8-3d85b7d4eb92",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
    image: "/images/properties/Image-1.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Apartment",
    price: 450000,
    location: "New York, NY",
    area: "1,500 sqft",
  },
  {
    id: "f82a6d2b-3329-4015-bc1b-3c3b730f6de2",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
    image: "/images/properties/Image-2.png",
    bedrooms: 3,
    bathrooms: 2.5,
    type: "Townhouse",
    price: 500000,
    location: "San Francisco, CA",
    area: "2,000 sqft",
  },
  {
    id: "1b2c3d4e-5f6a-789b-c012-d345e6789f01",
    title: "Lakeside Bliss Bungalow",
    description: "A cozy 2-bedroom bungalow with breathtaking lakeside views",
    image: "/images/properties/Image.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Bungalow",
    price: 400000,
    location: "Austin, TX",
    area: "1,800 sqft",
  },
  {
    id: "a1b2c3d4-e5f6-789b-c012-d345e6789f02",
    title: "Skyline Luxury Penthouse",
    description:
      "An exclusive 3-bedroom penthouse with 360-degree city skyline views",
    image: "/images/properties/Image-1.png",
    bedrooms: 3,
    bathrooms: 3,
    type: "Penthouse",
    price: 950000,
    location: "Chicago, IL",
    area: "4,500 sqft",
  },
  {
    id: "b1c2d3e4-f5a6-789b-c012-d345e6789f03",
    title: "Countryside Manor",
    description:
      "A grand 5-bedroom estate with sprawling gardens and modern interiors",
    image: "/images/properties/Image-2.png",
    bedrooms: 5,
    bathrooms: 4,
    type: "Estate",
    price: 1200000,
    location: "Nashville, TN",
    area: "5,800 sqft",
  },
  {
    id: "c1d2e3f4-a5b6-789c-d012-e345f6789f04",
    title: "Urban Loft Retreat",
    description:
      "A trendy and spacious 1-bedroom loft in the heart of downtown",
    image: "/images/properties/Image.png",
    bedrooms: 1,
    bathrooms: 1,
    type: "Loft",
    price: 300000,
    location: "Los Angeles, CA",
    area: "1,200 sqft",
  },
  {
    id: "d1e2f3a4-b5c6-789d-e012-f3456789f05",
    title: "Coastal Dream House",
    description:
      "A luxurious 4-bedroom beachfront property with private access to the ocean",
    image: "/images/properties/Image-1.png",
    bedrooms: 4,
    bathrooms: 3,
    type: "Beach House",
    price: 1100000,
    location: "Malibu, CA",
    area: "3,800 sqft",
  },
  {
    id: "e1f2a3b4-c5d6-789e-f012-3456789f06",
    title: "Mountain Escape Chalet",
    description:
      "A rustic yet modern 3-bedroom chalet nestled in a scenic mountain range",
    image: "/images/properties/Image-2.png",
    bedrooms: 3,
    bathrooms: 2,
    type: "Chalet",
    price: 600000,
    location: "Aspen, CO",
    area: "2,500 sqft",
  },
  {
    id: "f1a2b3c4-d5e6-789f-0123-456789f07",
    title: "Eco-Friendly Smart Home",
    description:
      "A futuristic 2-bedroom smart home designed with sustainability in mind",
    image: "/images/properties/Image.png",
    bedrooms: 2,
    bathrooms: 2,
    type: "Smart Home",
    price: 700000,
    location: "Seattle, WA",
    area: "2,200 sqft",
  },
];
