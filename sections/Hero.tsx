"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { business } from "@/lib/business";
import { formatPhoneHref } from "@/lib/utils";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#12151A]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pharmacy.jpg"
          alt="Luxury pharmacy interior with warm gold lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,21,26,0.92)_0%,rgba(18,21,26,0.78)_42%,rgba(18,21,26,0.35)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 40%, rgba(196,163,90,0.22), transparent 45%), radial-gradient(ellipse at 20% 80%, rgba(196,163,90,0.12), transparent 40%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-semibold tracking-tight text-[#E8D5A3] sm:text-4xl"
          >
            Abu Dhabi Pharmacy
          </motion.p>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#C4A35A]"
          >
            Your Health, Our Priority
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#F7F4EE] sm:text-5xl lg:text-6xl"
          >
            Your Healthcare Destination in Abu Dhabi
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#F7F4EE]/78 sm:text-lg"
          >
            Welcome to Abu Dhabi Pharmacy. Contact our team for pharmacy information,
            healthcare product inquiries, and assistance.
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact">Contact Pharmacy</Button>
            <Button
              href={formatPhoneHref(business.phoneTel)}
              variant="secondary"
              className="border-[#C4A35A]/40 bg-transparent text-[#F7F4EE] hover:bg-[#C4A35A]/15"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
