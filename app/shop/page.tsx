import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Shop",
  description: "Browse our premium ready-to-wear fashion collections.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-cream-dark pt-32 pb-16">
        <div className="container-custom">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Ready to Wear</p>
          <h1 className="font-serif text-display-md text-gray-900 mb-4">Our Collection</h1>
          <p className="text-gray-500 max-w-xl">Discover pieces crafted for the modern woman who values elegance, quality, and individuality.</p>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between mb-10">
          <p className="text-sm text-gray-500">{products.length} pieces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute top-4 left-4">
                  <Badge variant="burgundy">{product.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2">View Details</span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-gray-900 group-hover:text-wine-DEFAULT transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                </div>
                <p className="font-medium text-wine-DEFAULT text-sm shrink-0 ml-4">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}