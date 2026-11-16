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
    "bg-[linear-gradient(135deg,#C4A35A_0%,#8B7340_100%)] text-[#12151A] shadow-[0_10px_28px_rgba(196,163,90,0.28)] hover:shadow-[0_14px_32px_rgba(139,115,64,0.35)]",
  secondary:
    "bg-[#FFFEFB] text-[#1A1F24] border border-[#C4A35A]/35 hover:bg-[#E8E4DB]",
  outline:
    "bg-transparent text-[#1A1F24] border border-[#1A1F24]/25 hover:border-[#C4A35A] hover:bg-[#E8E4DB]/60",
  ghost: "bg-transparent text-[#1A1F24] hover:bg-[#E8E4DB]",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const reduceMotion = useReducedMotion();
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A35A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4EE] disabled:opacity-60",
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
