import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-[#24332E]";
  const accent = tone === "light" ? "text-[#A8E6CF]" : "text-[#15966A]";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Abu Dhabi Pharmacy home"
    >
      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#15966A,#086B4C)] text-white shadow-[0_8px_20px_rgba(21,150,106,0.28)]"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M8 4h8v4h4v8h-4v4H8v-4H4V8h4V4z"
            fill="currentColor"
            opacity="0.95"
          />
          <path d="M10.2 10.2h3.6v3.6h-3.6v-3.6z" fill="#E8F7F0" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={cn("block font-display text-lg font-semibold tracking-tight", text)}>
          Abu Dhabi <span className={accent}>Pharmacy</span>
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium uppercase tracking-[0.18em]",
            tone === "light" ? "text-white/70" : "text-[#086B4C]/70",
          )}
        >
          Healthcare · Abu Dhabi
        </span>
      </span>
    </Link>
  );
}
