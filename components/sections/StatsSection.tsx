const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Designs Created" },
  { value: "150+", label: "Graduates" },
  { value: "5+", label: "Years of Excellence" },
];

export default function StatsSection() {
  return (
    <section className="bg-cream-dark py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <span className="font-serif text-4xl md:text-5xl font-bold text-wine-DEFAULT mb-2">
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium">
                {stat.label}
              </span>
              {/* Divider — hidden on last item */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
