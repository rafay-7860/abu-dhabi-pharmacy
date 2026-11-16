"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { business, navLinks } from "@/lib/business";
import { services } from "@/lib/content";
import { formatPhoneHref } from "@/lib/utils";

export function Footer() {
  const reduceMotion = useReducedMotion();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-[#086B4C] text-white"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#15966A]/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Abu Dhabi Pharmacy on Najdah Street in Al Danah provides pharmacy-related
            assistance and healthcare product information for the local community.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Pharmacy Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              <a
                href={formatPhoneHref(business.phoneTel)}
                className="inline-flex items-start gap-2 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {business.phoneDisplay}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{business.address.full}</span>
            </li>
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#A8E6CF] underline-offset-4 hover:underline"
              >
                Open in Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year ?? ""} {business.name}. All rights reserved.
          </p>
          <p>Pharmacy and healthcare information for Abu Dhabi visitors.</p>
        </div>
      </div>
    </motion.footer>
  );
}
