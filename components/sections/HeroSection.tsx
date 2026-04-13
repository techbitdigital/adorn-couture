import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-burgundy" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-32">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.4em] uppercase text-burgundy-200 mb-6 animate-fade-in">
          Lagos, Nigeria · Est. 2020
        </p>

        {/* Headline */}
        <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-6 animate-slide-up text-balance">
          Where Fashion
          <br />
          <span className="italic text-burgundy-200">Meets Artistry</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-burgundy-100 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Discover premium ready-to-wear collections and world-class fashion
          education — all under one elegant roof.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link href="/shop">
            <Button size="lg" variant="secondary" className="bg-white text-wine-DEFAULT hover:bg-cream-dark min-w-[180px]">
              Shop Collection
            </Button>
          </Link>
          <Link href="/academy">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wine-DEFAULT min-w-[180px]">
              Explore Academy
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-burgundy-300">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-burgundy-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
