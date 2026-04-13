import Link from "next/link";
import { courses } from "@/lib/data/courses";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Courses",
  description: "Browse all fashion design courses at Adorn Couture Academy.",
};

const levelColors = {
  Beginner: "success" as const,
  Intermediate: "burgundy" as const,
  Advanced: "default" as const,
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-cream-dark pt-32 pb-16">
        <div className="container-custom">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Adorn Couture Academy</p>
          <h1 className="font-serif text-display-md text-gray-900 mb-4">Our Courses</h1>
          <p className="text-gray-500 max-w-xl">Choose from our range of professionally designed fashion programs — from beginner to advanced.</p>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Link key={course.id} href={`/academy/courses/${course.slug}`} className="group block border border-gray-100 hover:border-wine-DEFAULT transition-all duration-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <Badge variant={levelColors[course.level]}>{course.level}</Badge>
                <span className="text-xs text-gray-400">{course.duration}</span>
              </div>
              <h2 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-wine-DEFAULT transition-colors">{course.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{course.description}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="font-medium text-wine-DEFAULT text-lg">{formatPrice(course.price)}</span>
                <span className="text-sm text-gray-400 group-hover:text-wine-DEFAULT transition-colors tracking-wide">View Course →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}