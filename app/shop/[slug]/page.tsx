import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/data/products";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappMessage = `Hi! I am interested in ordering the ${product.name} (${formatPrice(product.price)}). Please provide more details.`;
  const whatsappLink = generateWhatsAppLink("+2348000000000", whatsappMessage);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom section-padding">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-10 tracking-wide">
          <Link href="/" className="hover:text-wine-DEFAULT transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-wine-DEFAULT transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-600">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Badge variant="burgundy" className="mb-4">{product.category}</Badge>
            <h1 className="font-serif text-display-sm text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-medium text-wine-DEFAULT mb-6">{formatPrice(product.price)}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            <div className="mb-6">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-700 mb-3">Available Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-wine-DEFAULT hover:text-wine-DEFAULT transition-colors cursor-pointer">{size}</span>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-700 mb-3">Colors</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span key={color} className="border border-gray-200 px-4 py-2 text-sm text-gray-700">{color}</span>
                ))}
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" fullWidth className="mb-4">Order via WhatsApp</Button>
            </a>
            <p className="text-xs text-gray-400 text-center">You will be redirected to WhatsApp to complete your order</p>
            <div className="border-t border-gray-100 mt-10 pt-8">
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                <p>Custom sizing available on request</p>
                <p>Delivery within Lagos: 2-3 business days</p>
                <p>Nationwide delivery available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}