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
      className="overflow-hidden rounded-2xl border border-[#1A1F24]/08 bg-[#FFFEFB] shadow-[0_12px_36px_rgba(18,21,26,0.05)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DB]">
        <Image
          src={image}
          alt={`${title} category illustration`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-[#1A1F24]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#2A2E32]/75">{description}</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8B7340] transition hover:gap-3 hover:text-[#C4A35A]"
        >
          Explore
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
