import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Abu Dhabi Pharmacy on Najdah Street in Al Danah, Abu Dhabi — pharmacy assistance and healthcare product inquiries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Care, Trust and Pharmacy Services"
        description="Abu Dhabi Pharmacy serves visitors on Najdah Street in Al Danah with pharmacy-related assistance and clear product information support."
      />
      <About showHeading={false} />
      <Contact showForm={false} />
    </>
  );
}
