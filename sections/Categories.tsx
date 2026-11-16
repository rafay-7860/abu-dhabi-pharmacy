import { CategoryCard } from "@/components/CategoryCard";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { categories } from "@/lib/content";

type CategoriesProps = {
  limit?: number;
  showCta?: boolean;
};

export function Categories({ limit, showCta = false }: CategoriesProps) {
  const items = typeof limit === "number" ? categories.slice(0, limit) : categories;

  return (
    <section id="categories" className="bg-[#F7F4EE] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B7340]">
            Health & Wellness
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#1A1F24] sm:text-4xl">
            Health and Wellness Categories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2A2E32]/75">
            Demo category content until the pharmacy confirms its actual product range.
            Prescription medicines are not listed for sale here.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              index={index}
            />
          ))}
        </div>

        {showCta && (
          <div className="mt-10 flex justify-center">
            <Button href="/categories" variant="secondary">
              Browse Categories
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
