"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { business } from "@/lib/business";
import { formatPhoneHref } from "@/lib/utils";

export function VisitLocation() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#12151A] py-20 sm:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/visit-najdah.jpg"
          alt="Abu Dhabi street atmosphere near Al Danah"
          fill
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,21,26,0.92)_0%,rgba(18,21,26,0.75)_55%,rgba(18,21,26,0.55)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C4A35A]">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F7F4EE] sm:text-4xl">
            Visit us on Najdah Street
          </h2>
          <p className="mt-4 flex items-start gap-2 text-base leading-relaxed text-[#F7F4EE]/75">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C4A35A]" aria-hidden />
            {business.address.full}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={formatPhoneHref(business.phoneTel)}>
              <Phone className="h-4 w-4" />
              Call Pharmacy
            </Button>
            <Button
              href={business.mapsUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[#C4A35A]/40 bg-transparent text-[#F7F4EE] hover:bg-[#C4A35A]/15"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
