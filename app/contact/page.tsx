import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/sections/Contact";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Abu Dhabi Pharmacy at ${business.phoneDisplay}. Najdah Street, Al Danah, Zone 1, Abu Dhabi. Get directions or send an inquiry.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Abu Dhabi Pharmacy"
        description="Call, send an inquiry, or open Google Maps for directions to our location on Najdah Street in Al Danah."
      />
      <Contact />
    </>
  );
}
