import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import StatsSection from "@/components/sections/StatsSection";
import AcademyHighlight from "@/components/sections/AcademyHighlight";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedCollection />
      <AcademyHighlight />

      {/* Contact CTA Banner */}
      <section className="py-20 bg-cream-dark">
        <div className="container-custom text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-display-sm text-gray-900 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you are looking for your next statement piece or ready to
            launch your fashion career — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-wine-DEFAULT min-w-[180px]">
                Contact Us
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="min-w-[180px]">
                Browse Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
