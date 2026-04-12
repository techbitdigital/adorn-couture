import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    slug: "fashion-design-fundamentals",
    title: "Fashion Design Fundamentals",
    description:
      "Master the core principles of fashion design — from sketching and pattern making to fabric selection and garment construction. Ideal for absolute beginners ready to start their fashion journey.",
    duration: "3 Months",
    level: "Beginner",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    curriculum: [
      "Introduction to Fashion Design",
      "Fashion Sketching & Illustration",
      "Fabric Types & Selection",
      "Basic Pattern Making",
      "Hand & Machine Sewing",
      "Garment Construction Basics",
      "Introduction to Styling",
      "Final Project: Create Your First Garment",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "advanced-pattern-making",
    title: "Advanced Pattern Making & Draping",
    description:
      "Take your technical skills to the next level. Deep dive into advanced flat pattern techniques, draping on the dress form, and professional grading methods used in the fashion industry.",
    duration: "4 Months",
    level: "Intermediate",
    price: 220000,
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
    curriculum: [
      "Advanced Flat Pattern Techniques",
      "Dress Form Draping",
      "Grading & Size Scaling",
      "Dart Manipulation & Design Lines",
      "Couture Construction Methods",
      "Creating Technical Specs",
      "Industry Standards & Tolerances",
      "Final Collection Project",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "fashion-business-entrepreneurship",
    title: "Fashion Business & Entrepreneurship",
    description:
      "Learn to build and scale a fashion brand from scratch. Covers brand identity, pricing, production, marketing, e-commerce, and how to navigate the Nigerian and global fashion market.",
    duration: "2 Months",
    level: "Intermediate",
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    curriculum: [
      "Building Your Fashion Brand Identity",
      "Pricing & Costing for Profit",
      "Production & Supply Chain",
      "Fashion Marketing & Social Media",
      "E-Commerce & Online Sales",
      "Client Management",
      "Fashion Week & Trade Shows",
      "Business Plan Presentation",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "luxury-bridal-design",
    title: "Luxury Bridal Design",
    description:
      "Specialize in the art of bridal couture. Learn to design and construct wedding gowns, bridesmaids dresses, and bridal accessories with a focus on luxury fabrics, beading, and embellishments.",
    duration: "3 Months",
    level: "Advanced",
    price: 280000,
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=800&q=80",
    curriculum: [
      "History of Bridal Fashion",
      "Luxury Fabric Handling",
      "Structural Bodice Construction",
      "Hand Beading & Embellishment",
      "Veil & Accessory Making",
      "Client Fitting & Alterations",
      "Bridal Business Setup",
      "Showcase Bridal Collection",
    ],
    featured: false,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
