import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Health Categories",
  description:
    "Health and wellness category information for Abu Dhabi Pharmacy visitors. Demo content until the pharmacy confirms its product range.",
};

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Health Categories"
        title="Health and Wellness Categories"
        description="Demo categories for website visitors. Contact the pharmacy to confirm current products. Prescription medicines are not offered for sale through this website."
      />
      <Categories />
      <Contact showForm={false} />
    </>
  );
}
