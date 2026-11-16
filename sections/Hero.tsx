"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Cross, HeartPulse, Phone, ShieldPlus } from "lucide-react";
import { Button } from "@/components/Button";
import { business } from "@/lib/business";
import { formatPhoneHref } from "@/lib/utils";

const floatIcons = [
  { Icon: HeartPulse, className: "left-[8%] top-[22%]" },
  { Icon: ShieldPlus, className: "right-[12%] top-[18%]" },
  { Icon: Cross, className: "bottom-[18%] left-[14%]" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(145deg,#E8F7F0_0%,#FFFFFF_42%,#F5F8F7_100%)] pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#15966A]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[40%] bg-[#086B4C]/10 blur-3xl"
        aria-hidden
      />

      {!reduceMotion &&
        floatIcons.map(({ Icon, className }, index) => (
          <motion.div
            key={index}
            className={`pointer-events-none absolute hidden text-[#15966A]/35 lg:block ${className}`}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Icon className="h-10 w-10" />
          </motion.div>
        ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[#15966A]"
          >
            Your Health, Our Priority
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#24332E] sm:text-5xl lg:text-6xl"
          >
            Your Healthcare Destination in Abu Dhabi
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#24332E]/75 sm:text-lg"
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
            <Button href={formatPhoneHref(business.phoneTel)} variant="secondary">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,#15966A33,#086B4C22)] blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_80px_rgba(8,107,76,0.18)]">
            <Image
              src="/images/hero-pharmacy.svg"
              alt="Professional pharmacy interior placeholder for Abu Dhabi Pharmacy"
              width={960}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-5 -left-3 hidden rounded-3xl bg-white px-4 py-3 shadow-[0_16px_40px_rgba(36,51,46,0.12)] sm:block"
            aria-hidden
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#15966A]">
              Najdah Street
            </p>
            <p className="text-sm font-medium text-[#24332E]">Al Danah, Abu Dhabi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
