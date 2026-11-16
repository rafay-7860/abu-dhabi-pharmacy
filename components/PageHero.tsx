"use client";

import { motion, useReducedMotion } from "framer-motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#1A1F24_0%,#2A3038_48%,#1A1F24_100%)] pb-16 pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#C4A35A]/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C4A35A]"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#F7F4EE] sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-[#F7F4EE]/75 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
