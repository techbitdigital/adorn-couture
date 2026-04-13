import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function FeaturedCollection() {
  const products = getFeaturedProducts().slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">
              New Arrivals
            </p>
            <h2 className="font-serif text-display-sm text-gray-900">
              Featured Collection
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-wine-DEFAULT hover:underline underline-offset-4 tracking-wide shrink-0"
          >
            View All Pieces →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="burgundy">{product.category}</Badge>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2">
                    View Details
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-gray-900 group-hover:text-wine-DEFAULT transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.colors.slice(0, 2).join(", ")}
                    {product.colors.length > 2 && ` +${product.colors.length - 2}`}
                  </p>
                </div>
                <p className="font-medium text-wine-DEFAULT text-sm shrink-0 ml-4">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/shop">
            <Button variant="outline" size="lg">
              Explore Full Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
