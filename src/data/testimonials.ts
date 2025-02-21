export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Wade Warren",
    location: "USA, California",
    image: "/images/testimonial/Profile.png",
    rating: 5,
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
  {
    id: 2,
    name: "Emelie Thomson",
    location: "USA, Florida",
    image: "/images/testimonial/Profile-1.png",
    rating: 4,
    review:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
  },
  {
    id: 3,
    name: "John Mans",
    location: "USA, Nevada",
    image: "/images/testimonial/Profile-2.png",
    rating: 4,
    review:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
  },
];
