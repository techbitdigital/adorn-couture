import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "crimson-evening-gown",
    name: "Crimson Evening Gown",
    price: 185000,
    category: "Evening Wear",
    description:
      "A breathtaking floor-length gown crafted from premium silk charmeuse. Features a dramatic open back, hand-sewn beading at the bodice, and a sweeping train. Perfect for galas, weddings, and black-tie events.",
    images: [
      "https://images.unsplash.com/photo-1566479179817-0b9f8e6b8e2b?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Crimson", "Midnight Black", "Ivory"],
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "ivory-bridal-ensemble",
    name: "Ivory Bridal Ensemble",
    price: 320000,
    category: "Bridal",
    description:
      "An exquisite bridal ensemble featuring intricate lace overlay, cathedral-length veil, and a structured bodice with hand-embroidered floral details. Every stitch tells a story of timeless elegance.",
    images: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Pearl White"],
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "wine-wrap-dress",
    name: "Wine Wrap Dress",
    price: 75000,
    category: "Casual Wear",
    description:
      "A versatile wrap dress in deep wine crepe fabric. Flattering silhouette with adjustable waist tie, flutter sleeves, and midi length. Effortlessly transitions from day to evening.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Wine", "Forest Green", "Navy"],
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "structured-power-blazer",
    name: "Structured Power Blazer",
    price: 95000,
    category: "Work Wear",
    description:
      "A sharp, tailored blazer with clean lines and a modern cut. Premium wool-blend fabric with satin lapels. The ultimate power piece for the confident professional woman.",
    images: [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Ivory", "Burgundy"],
    featured: false,
    inStock: true,
  },
  {
    id: "5",
    slug: "ankara-fusion-co-ord",
    name: "Ankara Fusion Co-ord Set",
    price: 68000,
    category: "Casual Wear",
    description:
      "A stunning two-piece co-ord set fusing vibrant Ankara print with contemporary tailoring. Features a cropped jacket and wide-leg trousers. Celebrating African heritage with modern flair.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Multi-print"],
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    slug: "noir-cocktail-dress",
    name: "Noir Cocktail Dress",
    price: 112000,
    category: "Evening Wear",
    description:
      "A sleek knee-length cocktail dress in matte black crepe. Features an asymmetric neckline, ruched waist detail, and a subtle thigh-high slit. The perfect little black dress, elevated.",
    images: [
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Noir Black"],
    featured: false,
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
