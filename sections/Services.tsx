import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import { AnimateIn } from "@/components/AnimateIn";
import { services } from "@/lib/content";

type ServicesProps = {
  limit?: number;
  showCta?: boolean;
};

export function Services({ limit, showCta = false }: ServicesProps) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-[#F5F8F7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#15966A]">
            Pharmacy Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24332E] sm:text-4xl">
            Support for Everyday Healthcare Needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#24332E]/75">
            Suggested service categories for website visitors. Availability may vary —
            contact the pharmacy to confirm what you need.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {showCta && (
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
