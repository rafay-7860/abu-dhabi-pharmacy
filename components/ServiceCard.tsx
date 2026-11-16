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
      className="group rounded-3xl border border-[#15966A]/10 bg-white p-6 shadow-[0_12px_40px_rgba(36,51,46,0.06)] transition-shadow hover:shadow-[0_18px_50px_rgba(21,150,106,0.14)]"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7F0] text-[#086B4C] transition-colors group-hover:bg-[linear-gradient(135deg,#15966A,#086B4C)] group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-[#24332E]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#24332E]/75">{description}</p>
    </motion.article>
  );
}
