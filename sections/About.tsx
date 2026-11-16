"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { business } from "@/lib/business";

type AboutProps = {
  preview?: boolean;
  showHeading?: boolean;
};

export function About({ preview = false, showHeading = true }: AboutProps) {
  return (
    <section id="about" className="bg-[#F7F4EE] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1A1F24]/08 bg-[#E8E4DB] shadow-[0_24px_60px_rgba(18,21,26,0.08)]">
            <Image
              src="/images/about-pharmacy.svg"
              alt="Healthcare and pharmacy care environment placeholder"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {showHeading && (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B7340]">
                About Abu Dhabi Pharmacy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#1A1F24] sm:text-4xl">
                Care, Trust and Pharmacy Services
              </h2>
            </>
          )}
          <div className={`${showHeading ? "mt-5" : "mt-0"} space-y-4 text-base leading-relaxed text-[#2A2E32]/75`}>
            <p>
              Abu Dhabi Pharmacy is located on {business.address.street} in{" "}
              {business.address.area}, {business.address.city},{" "}
              {business.address.country}.
            </p>
            <p>
              We provide pharmacy-related services and are happy to help with
              healthcare product inquiries, product information, and practical
              assistance for visitors to our pharmacy.
            </p>
            {preview && (
              <p>
                Whether you need directions, want to ask about available product
                categories, or prefer to speak with our team by phone, we welcome
                your questions.
              </p>
            )}
            {!preview && (
              <>
                <p>
                  Our focus is clear communication and helpful support. Reach out
                  by phone or use the contact form to share your inquiry, and our
                  team will assist you with pharmacy information.
                </p>
                <p>
                  You can find us easily using Google Maps and contact us at{" "}
                  {business.phoneDisplay} for assistance.
                </p>
              </>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Contact Us</Button>
            {preview && (
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
