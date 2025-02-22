interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
  buttonText?: string;
  gridSpan?: string;
}

export const servicesOne: Service[] = [
  {
    id: 1,
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
    icon: "/icon/bars.svg",
    gridSpan: "single", // Default size
  },
  {
    id: 2,
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: "/icon/pie.svg",
    gridSpan: "single",
  },
  {
    id: 3,
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: "/icon/stack.svg",
    gridSpan: "single",
  },
  {
    id: 4,
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: "/icon/speaker.svg",
    gridSpan: "single",
  },
  {
    id: 5,
    title: "Unlock the Value of Your Property Today",
    description:
      "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
    buttonText: "Learn More",
    gridSpan: "double", // Spans two columns
  },
];

export const servicesTwo: Service[] = [
  {
    id: 1,
    title: "tenant harmony",
    description:
      "Our tenant Management Service ensures that your tenants have a smooth and harmonious experience",
    icon: "/icon/layout.svg",
    gridSpan: "single",
  },
  {
    id: 2,
    title: "maintenance ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: "/icon/tag.svg",
    gridSpan: "single",
  },
  {
    id: 3,
    title: "financial peace of mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of the rent collection.",
    icon: "/icon/sparkles.svg",
    gridSpan: "single",
  },
  {
    id: 4,
    title: "legal guardian",
    description:
      "Stay compliant with property laws and regulations with our expert legal guidance.",
    icon: "/icon/sun.svg",
    gridSpan: "single",
  },
  {
    id: 5,
    title: "experience effortless property management",
    description:
      "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    buttonText: "Learn More",
    gridSpan: "double",
  },
];

export const servicesThree: Service[] = [
  {
    id: 1,
    title: "market insight",
    description:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    icon: "/icon/layout.svg",
  },
  {
    id: 2,
    title: "ROI assessment",
    description:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    icon: "/icon/fire.svg",
  },
  {
    id: 3,
    title: "customized strategies",
    description:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    icon: "/icon/idea.svg",
  },
  {
    id: 4,
    title: "diversification mastery",
    description:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    icon: "/icon/sun.svg",
  },
];
