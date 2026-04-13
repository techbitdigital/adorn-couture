import Link from "next/link";
import { getFeaturedCourses } from "@/lib/data/courses";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Clock, Users, Award } from "lucide-react";

const perks = [
  { icon: Clock, text: "Flexible scheduling" },
  { icon: Users, text: "Small class sizes" },
  { icon: Award, text: "Certificate upon completion" },
];

export default function AcademyHighlight() {
  const courses = getFeaturedCourses().slice(0, 3);

  return (
    <section className="section-padding bg-burgundy-950 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-burgundy-300 mb-3">
            Adorn Couture Academy
          </p>
          <h2 className="font-serif text-display-sm text-white mb-4">
            Learn the Art of Fashion Design
          </h2>
          <p className="text-burgundy-200 leading-relaxed">
            From sketching your first design to running your own label — our
            academy equips aspiring designers with real-world skills and
            industry knowledge.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap gap-6 mt-6">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-burgundy-200">
                <Icon size={15} className="text-burgundy-400 shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/academy/courses/${course.slug}`}
              className="group block bg-burgundy-900 hover:bg-burgundy-800 transition-colors duration-300 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="border-burgundy-600 text-burgundy-300">
                  {course.level}
                </Badge>
                <span className="text-xs text-burgundy-400">{course.duration}</span>
              </div>

              <h3 className="font-serif text-lg text-white mb-2 group-hover:text-burgundy-200 transition-colors">
                {course.title}
              </h3>

              <p className="text-sm text-burgundy-300 leading-relaxed mb-6 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-sm">
                  {formatPrice(course.price)}
                </span>
                <span className="text-xs text-burgundy-400 group-hover:text-white transition-colors">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/academy/apply">
            <Button size="lg" className="bg-white text-wine-DEFAULT hover:bg-cream-dark min-w-[180px]">
              Apply Now
            </Button>
          </Link>
          <Link href="/academy/courses">
            <Button size="lg" variant="outline" className="border-burgundy-600 text-burgundy-200 hover:border-white hover:text-white min-w-[180px]">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
