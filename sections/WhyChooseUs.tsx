"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-choose-us" className="bg-[#E8E4DB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B7340]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#1A1F24] sm:text-4xl">
            Your Local Pharmacy in Abu Dhabi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2A2E32]/75">
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
                className="rounded-2xl border border-[#1A1F24]/08 bg-[#FFFEFB] p-6 shadow-[0_12px_36px_rgba(18,21,26,0.05)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A1F24] text-[#E8D5A3]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1A1F24]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2A2E32]/75">
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
