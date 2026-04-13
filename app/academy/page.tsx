import Link from "next/link";
import { getFeaturedCourses } from "@/lib/data/courses";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Academy",
  description: "World-class fashion design education in Lagos, Nigeria.",
};

const perks = [
  { icon: Clock, title: "Flexible Schedule", desc: "Morning and evening classes available to fit your lifestyle." },
  { icon: Users, title: "Small Class Sizes", desc: "Personalized attention with a maximum of 15 students per class." },
  { icon: Award, title: "Certification", desc: "Receive an industry-recognized certificate upon completion." },
  { icon: BookOpen, title: "Expert Tutors", desc: "Learn from working fashion professionals with real industry experience." },
];

export default function AcademyPage() {
  const courses = getFeaturedCourses();
  return (
    <div className="min-h-screen bg-white">
      <div className="gradient-burgundy pt-32 pb-20">
        <div className="container-custom text-white">
          <p className="text-xs tracking-[0.3em] uppercase text-burgundy-300 mb-3">Adorn Couture Academy</p>
          <h1 className="font-serif text-display-md text-white mb-6 max-w-2xl">Learn the Art of Fashion Design</h1>
          <p className="text-burgundy-200 max-w-xl leading-relaxed mb-10">From your first sketch to running your own label — we equip aspiring designers with real-world skills and industry knowledge.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/academy/apply"><Button size="lg" className="bg-white text-wine-DEFAULT hover:bg-cream-dark min-w-[180px]">Apply Now</Button></Link>
            <Link href="/academy/courses"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wine-DEFAULT min-w-[180px]">View Courses</Button></Link>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Why Choose Us</p>
          <h2 className="font-serif text-display-sm text-gray-900">World-Class Fashion Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="text-center p-6">
                <div className="w-12 h-12 bg-cream-dark flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-wine-DEFAULT" />
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Our Programs</p>
          <h2 className="font-serif text-display-sm text-gray-900 mb-4">Featured Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Link key={course.id} href={`/academy/courses/${course.slug}`} className="group block border border-gray-100 hover:border-wine-DEFAULT transition-colors duration-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline">{course.level}</Badge>
                <span className="text-xs text-gray-400">{course.duration}</span>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-wine-DEFAULT transition-colors">{course.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-wine-DEFAULT">{formatPrice(course.price)}</span>
                <span className="text-xs text-gray-400 group-hover:text-wine-DEFAULT transition-colors">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/academy/courses"><Button variant="outline" size="lg">View All Courses</Button></Link>
        </div>
      </div>
    </div>
  );
}