"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/business";
import { formatPhoneHref } from "@/lib/utils";

type ContactProps = {
  showForm?: boolean;
};

export function Contact({ showForm = true }: ContactProps) {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#15966A]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24332E] sm:text-4xl">
            {business.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#24332E]/75">
            Call us, send an inquiry, or open Google Maps for directions to our
            Najdah Street location.
          </p>
        </AnimateIn>

        <div className={`mt-12 grid gap-8 ${showForm ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}>
          <AnimateIn>
            <div className="rounded-3xl border border-[#15966A]/10 bg-[#F5F8F7] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-[#24332E]">
                Location Information
              </h3>
              <ul className="mt-6 space-y-4 text-[#24332E]/85">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#15966A]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#086B4C]">
                      Phone
                    </p>
                    <a
                      href={formatPhoneHref(business.phoneTel)}
                      className="text-lg font-medium hover:underline"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#15966A]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#086B4C]">
                      Address
                    </p>
                    <p>{business.address.full}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={formatPhoneHref(business.phoneTel)}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  href={business.mapsUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#15966A]/15 bg-white">
                <iframe
                  title="Abu Dhabi Pharmacy location map"
                  src="https://www.google.com/maps?q=Najdah+Street,+Al+Danah,+Abu+Dhabi&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="border-t border-[#15966A]/10 px-4 py-3 text-sm text-[#24332E]/70">
                  Map preview based on address. For the verified place link, use{" "}
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#086B4C] underline-offset-2 hover:underline"
                  >
                    Get Directions
                  </a>
                  .
                </div>
              </div>
            </div>
          </AnimateIn>

          {showForm && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
