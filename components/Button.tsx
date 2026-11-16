"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#15966A_0%,#086B4C_100%)] text-white shadow-[0_10px_30px_rgba(21,150,106,0.28)] hover:shadow-[0_14px_34px_rgba(8,107,76,0.35)]",
  secondary:
    "bg-white text-[#086B4C] border border-[#15966A]/25 hover:bg-[#E8F7F0]",
  outline:
    "bg-transparent text-[#086B4C] border border-[#15966A]/40 hover:bg-[#E8F7F0]",
  ghost: "bg-transparent text-[#086B4C] hover:bg-[#E8F7F0]",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const reduceMotion = useReducedMotion();
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15966A] focus-visible:ring-offset-2 disabled:opacity-60",
    variants[variant],
    className,
  );

  const motionProps = {
    whileHover: reduceMotion ? undefined : { y: -2, scale: 1.01 },
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
  };

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http") || props.href.startsWith("tel:");
    if (external) {
      return (
        <motion.a
          href={props.href}
          target={props.target}
          rel={props.rel}
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
