import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.65,
        }}
      >
        <source src="/adornvideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="container-custom"
        style={{ position: "relative", zIndex: 10, paddingTop: "8rem", paddingBottom: "6rem" }}
      >
        <div style={{ maxWidth: "700px" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A84C" }} />
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500 }}>
              Lagos, Ibadan Nigeria · Est. 2020
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title" style={{ color: "white", marginBottom: "1.5rem" }}>
            Where
            <br />
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Fashion</span>
            <br />
            Meets Art
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "2.5rem",
          }}>
            Discover premium ready-to-wear collections and world-class fashion education — all under one elegant roof.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <Link href="/shop" className="btn-white">
              Shop Collection
            </Link>
            <Link
              href="/academy"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.4)",
                paddingBottom: "2px",
              }}
            >
              Explore Academy →
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "1.5rem",
            display: "flex",
            gap: "3rem",
          }}
          className="hidden md:flex"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "200+", label: "Designs" },
            { value: "150+", label: "Graduates" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}