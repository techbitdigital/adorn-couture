import Link from "next/link";
import Button from "@/components/ui/Button";

const values = [
  { title: "Elegance", desc: "We believe fashion is an art form. Every piece we create reflects our commitment to timeless elegance and refined craftsmanship." },
  { title: "Quality", desc: "From fabric selection to final stitch, we use only premium materials and techniques that stand the test of time." },
  { title: "Empowerment", desc: "Through our academy, we empower the next generation of Nigerian fashion designers with world-class education." },
  { title: "Authenticity", desc: "We celebrate African heritage and identity, fusing traditional aesthetics with contemporary global fashion trends." },
];

const team = [
  { name: "Adaeze Okonkwo", role: "Founder & Creative Director", bio: "With over 15 years in the fashion industry, Adaeze founded Adorn Couture to bridge the gap between luxury fashion and accessible education in Nigeria." },
  { name: "Chidi Nwosu", role: "Head of Academy", bio: "A graduate of the London College of Fashion, Chidi brings international expertise to our curriculum, ensuring students receive world-class training." },
  { name: "Amaka Eze", role: "Lead Designer", bio: "Specializing in bridal and evening wear, Amaka has dressed some of Nigeria's most prominent women for their most special occasions." },
];

export const metadata = {
  title: "About",
  description: "Learn about Adorn Couture — our story, values, and the team behind the brand.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="gradient-burgundy pt-32 pb-20">
        <div className="container-custom text-white">
          <p className="text-xs tracking-[0.3em] uppercase text-burgundy-300 mb-3">Our Story</p>
          <h1 className="font-serif text-display-md text-white mb-6 max-w-2xl">Fashion With Purpose, Education With Passion</h1>
          <p className="text-burgundy-200 max-w-xl leading-relaxed">Adorn Couture was born from a simple belief — that every woman deserves to feel extraordinary, and every aspiring designer deserves world-class training.</p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Who We Are</p>
            <h2 className="font-serif text-display-sm text-gray-900 mb-6">A Lagos Fashion House Like No Other</h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>Founded in 2020 in the heart of Lagos, Adorn Couture began as a small atelier with a big dream — to create fashion that celebrates the modern African woman while nurturing the next generation of fashion talent.</p>
              <p>Today, we operate two distinct verticals: a premium ready-to-wear collection that has dressed thousands of women across Nigeria, and a fashion academy that has trained over 150 aspiring designers.</p>
              <p>Every piece we create and every student we teach carries our DNA — a relentless pursuit of excellence, creativity, and authentic African elegance.</p>
            </div>
          </div>
          <div className="bg-cream-dark aspect-square flex items-center justify-center">
            <div className="text-center p-12">
              <p className="font-serif text-6xl font-bold text-wine-DEFAULT mb-2">5+</p>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-400">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">What Drives Us</p>
            <h2 className="font-serif text-display-sm text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="border border-gray-100 p-8 hover:border-wine-DEFAULT transition-colors duration-300">
                <h3 className="font-serif text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">The People Behind The Brand</p>
            <h2 className="font-serif text-display-sm text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center p-8 bg-cream-dark">
                <div className="w-20 h-20 bg-wine-DEFAULT rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-serif text-2xl text-white">{member.name[0]}</span>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-wine-DEFAULT mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-burgundy-950 text-white p-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-burgundy-300 mb-3">Join Us</p>
          <h2 className="font-serif text-display-sm text-white mb-4">Ready to Be Part of Our Story?</h2>
          <p className="text-burgundy-200 max-w-lg mx-auto mb-8">Whether you are looking for your next statement piece or ready to launch your fashion career — we are here for you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop"><Button size="lg" className="bg-white text-wine-DEFAULT hover:bg-cream-dark min-w-[180px]">Shop Collection</Button></Link>
            <Link href="/academy/apply"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wine-DEFAULT min-w-[180px]">Apply to Academy</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}