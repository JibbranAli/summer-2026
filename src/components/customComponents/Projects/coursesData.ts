// Course data for the 4 main courses displayed on homepage
export interface Course {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  price: string;
  originalPrice?: string;
  paymentLink: string;
  brochurePdfUrl: string;
}

export const courses: Course[] = [
  {
    title: "Full Stack Web Dev MERN",
    image: {
      src: "/assets/Projects/MERN.png",
      alt: "Full Stack Web Dev MERN",
      width: 400,
      height: 300,
    },
    price: "6,500",
    originalPrice: "10,000",
    paymentLink: "https://rzp.io/rzp/summer-mern",
    brochurePdfUrl: "https://example.com/brochures/mern-brochure.pdf", // Dummy - replace later
  },
  {
    title: "Data Sci ML",
    image: {
      src: "/assets/Projects/MLAI.png",
      alt: "Data Science & Machine Learning",
      width: 400,
      height: 300,
    },
    price: "5,500",
    originalPrice: "8,000",
    paymentLink: "https://rzp.io/rzp/summer-ml",
    brochurePdfUrl: "https://example.com/brochures/datasci-ml-brochure.pdf", // Dummy - replace later
  },
  {
    title: "Data Analytics",
    image: {
      src: "/assets/Projects/MLAI.png", // Using same image for now - replace later
      alt: "Data Analytics",
      width: 400,
      height: 300,
    },
    price: "5,500",
    originalPrice: "8,000",
    paymentLink: "https://rzp.io/rzp/summer-data-analytics",
    brochurePdfUrl: "https://example.com/brochures/data-analytics-brochure.pdf", // Dummy - replace later
  },
  {
    title: "Salesforce",
    image: {
      src: "/assets/Projects/AWS.png", // Using AWS image for now - replace later
      alt: "Salesforce",
      width: 400,
      height: 300,
    },
    price: "6,500",
    originalPrice: "10,000",
    paymentLink: "https://rzp.io/rzp/summer-salesforce",
    brochurePdfUrl: "https://example.com/brochures/salesforce-brochure.pdf", // Dummy - replace later
  },
];

