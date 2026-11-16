export const business = {
  name: "Abu Dhabi Pharmacy",
  category: "Pharmacy and Healthcare",
  phoneDisplay: "+971 2 886 5628",
  phoneTel: "+97128865628",
  address: {
    street: "Najdah Street",
    area: "Al Danah, Zone 1",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    full: "Najdah Street, Al Danah, Zone 1, Abu Dhabi, United Arab Emirates",
  },
  mapsUrl: "https://maps.app.goo.gl/kArgaNa3UukhfiTy7",
  /** Set NEXT_PUBLIC_SITE_URL in production (e.g. your Vercel domain). */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Pharmacy Services" },
  { href: "/categories", label: "Health Categories" },
  { href: "/#why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
] as const;
