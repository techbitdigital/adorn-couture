import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export default function FeaturedCollection() {
  const products = getFeaturedProducts().slice(0, 3);

  return (
    <section style={{ backgroundColor: "white", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <div>
            <p className="tag" style={{ marginBottom: "0.75rem", display: "block" }}>New Arrivals</p>
            <h2 className="section-title">Featured Collection</h2>
          </div>
          <Link
            href="/shop"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#722F37",
              fontWeight: 500,
              borderBottom: "1px solid #722F37",
              paddingBottom: "2px",
            }}
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#F0EBE3", aspectRatio: index === 0 ? "2/3" : "3/4" }}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                {/* Category Tag */}
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  backgroundColor: "white",
                  padding: "0.3rem 0.75rem",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "#722F37",
                }}>
                  {product.category}
                </div>
              </div>
              {/* Info */}
              <div style={{ paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "0.25rem",
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{product.category}</p>
                </div>
                <p style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#722F37",
                  whiteSpace: "nowrap",
                  marginLeft: "1rem",
                }}>
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}