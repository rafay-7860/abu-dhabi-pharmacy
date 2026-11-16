"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-choose-us" className="bg-[#F5F8F7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#15966A]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24332E] sm:text-4xl">
            Your Local Pharmacy in Abu Dhabi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#24332E]/75">
            Simple reasons visitors choose Abu Dhabi Pharmacy for pharmacy information
            and local healthcare product inquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-3xl border border-[#15966A]/10 bg-white p-6 shadow-[0_12px_36px_rgba(36,51,46,0.06)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F0] text-[#086B4C]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#24332E]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#24332E]/75">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
