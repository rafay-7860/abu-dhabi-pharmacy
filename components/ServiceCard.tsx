"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "@/lib/icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  index?: number;
};

export function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = getIcon(icon);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group rounded-2xl border border-[#1A1F24]/08 bg-[#FFFEFB] p-6 shadow-[0_12px_40px_rgba(18,21,26,0.05)] transition-shadow hover:border-[#C4A35A]/35 hover:shadow-[0_18px_50px_rgba(196,163,90,0.16)]"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8E4DB] text-[#8B7340] transition-colors group-hover:bg-[linear-gradient(135deg,#C4A35A,#8B7340)] group-hover:text-[#12151A]">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-2xl font-semibold text-[#1A1F24]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#2A2E32]/75">{description}</p>
    </motion.article>
  );
}
