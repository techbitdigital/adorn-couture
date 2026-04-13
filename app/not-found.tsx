import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-4">Error 404</p>
        <h1 className="font-serif text-6xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="inline-block bg-wine-DEFAULT text-white px-8 py-3 text-sm tracking-wide hover:bg-wine-dark transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}