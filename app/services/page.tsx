import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Pharmacy Services",
  description:
    "Explore pharmacy service categories at Abu Dhabi Pharmacy including prescription assistance information, OTC questions, and healthcare product inquiries.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pharmacy Services"
        title="Pharmacy Assistance and Product Information"
        description="Browse suggested service categories and contact Abu Dhabi Pharmacy to confirm what you need. This page does not provide medical diagnoses or treatment recommendations."
      />
      <Services />
      <Contact showForm={false} />
    </>
  );
}
