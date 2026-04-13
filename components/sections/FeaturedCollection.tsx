"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getFeaturedProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

function ProductCard({ product, index }: { product: any; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/shop/${product.slug}`} style={{ display: "block", textDecoration: "none" }}>
      <div
        style={{ position: "relative", overflow: "hidden", backgroundColor: "#F0EBE3", aspectRatio: index === 0 ? "2/3" : "3/4" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.7s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "white", padding: "0.3rem 0.75rem", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: "#722F37" }}>
          {product.category}
        </div>
        {hovered && (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.15)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "1.5rem" }}>
            <span style={{ color: "white", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid white", padding: "0.5rem 1.5rem" }}>
              View Details
            </span>
          </div>
        )}
      </div>
      <div style={{ paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.25rem" }}>
            {product.name}
          </h3>
          <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{product.category}</p>
        </div>
        <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#722F37", whiteSpace: "nowrap", marginLeft: "1rem" }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedCollection() {
  const products = getFeaturedProducts().slice(0, 3);

  return (
    <section style={{ backgroundColor: "white", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container-custom">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <div>
            <p className="tag" style={{ marginBottom: "0.75rem", display: "block" }}>New Arrivals</p>
            <h2 className="section-title">Featured Collection</h2>
          </div>
          <Link href="/shop" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#722F37", fontWeight: 500, borderBottom: "1px solid #722F37", paddingBottom: "2px" }}>
            View All →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}