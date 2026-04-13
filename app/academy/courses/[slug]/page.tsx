import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Clock, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom section-padding">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-10 tracking-wide">
          <Link href="/" className="hover:text-wine-DEFAULT transition-colors">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-wine-DEFAULT transition-colors">Academy</Link>
          <span>/</span>
          <Link href="/academy/courses" className="hover:text-wine-DEFAULT transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-gray-600">{course.title}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <Badge variant="burgundy" className="mb-4">{course.level}</Badge>
            <h1 className="font-serif text-display-sm text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">{course.description}</p>
            <div>
              <h2 className="font-serif text-2xl text-gray-900 mb-6">What You Will Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-wine-DEFAULT mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="border border-gray-100 p-8 sticky top-24">
              <p className="text-3xl font-serif font-bold text-wine-DEFAULT mb-2">{formatPrice(course.price)}</p>
              <p className="text-sm text-gray-400 mb-6">Full course fee</p>
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
                <Clock size={15} className="text-wine-DEFAULT" />
                <span>Duration: {course.duration}</span>
              </div>
              <Link href="/academy/apply">
                <Button size="lg" fullWidth className="bg-wine-DEFAULT text-white hover:bg-wine-dark mb-4">
                  Apply for This Course
                </Button>
              </Link>
              <p className="text-xs text-gray-400 text-center">Applications reviewed within 48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}