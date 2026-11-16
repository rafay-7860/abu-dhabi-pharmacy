import { business } from "@/lib/business";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: business.name,
    description:
      "Pharmacy and healthcare product information on Najdah Street, Al Danah, Abu Dhabi.",
    telephone: business.phoneDisplay,
    url: business.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.area}`,
      addressLocality: business.address.city,
      addressCountry: "AE",
    },
    hasMap: business.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
