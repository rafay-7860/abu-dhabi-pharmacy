import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-[#1A1F24]";
  const accent = tone === "light" ? "text-[#E8D5A3]" : "text-[#C4A35A]";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Abu Dhabi Pharmacy home"
    >
      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(145deg,#C4A35A,#8B7340)] text-[#12151A] shadow-[0_8px_20px_rgba(196,163,90,0.28)]"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M8 4h8v4h4v8h-4v4H8v-4H4V8h4V4z"
            fill="currentColor"
            opacity="0.95"
          />
          <path d="M10.2 10.2h3.6v3.6h-3.6v-3.6z" fill="#F7F4EE" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={cn("block font-display text-xl font-semibold tracking-tight", text)}>
          Abu Dhabi <span className={accent}>Pharmacy</span>
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium uppercase tracking-[0.2em]",
            tone === "light" ? "text-white/65" : "text-[#8B7340]",
          )}
        >
          Healthcare · Abu Dhabi
        </span>
      </span>
    </Link>
  );
}
