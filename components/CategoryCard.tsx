"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  index?: number;
};

export function CategoryCard({
  title,
  description,
  image,
  index = 0,
}: CategoryCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="overflow-hidden rounded-3xl border border-[#15966A]/10 bg-white shadow-[0_12px_36px_rgba(36,51,46,0.06)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F7F0]">
        <Image
          src={image}
          alt={`${title} category illustration`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[#24332E]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#24332E]/75">{description}</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#086B4C] transition hover:gap-3"
        >
          Explore
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
