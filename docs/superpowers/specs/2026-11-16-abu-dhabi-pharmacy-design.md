# Abu Dhabi Pharmacy Website — Design Spec

**Date:** 2026-11-16  
**Status:** Approved for implementation (user: architecture + form B + local images B + multi-page)

## Goal

Premium, trustworthy multi-page pharmacy website for Abu Dhabi Pharmacy so visitors can learn about the pharmacy, browse service/category information, contact the business, and find the location.

## Verified business data only

- Name: Abu Dhabi Pharmacy
- Phone: +971 2 886 5628 (`tel:+97128865628`)
- Address: Najdah Street, Al Danah, Zone 1, Abu Dhabi, United Arab Emirates
- Maps: https://maps.app.goo.gl/kArgaNa3UukhfiTy7
- Email: not provided — do not invent

Do not invent history, years, certifications, awards, hours, ratings, delivery, 24/7, or inventory.

## Architecture

- Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lucide React
- Routes: `/`, `/about`, `/services`, `/categories`, `/contact`, `/api/contact`
- Shared Header (sticky) + Footer in root layout
- Editable content in `lib/business.ts` and `lib/content.ts`
- Local image placeholders in `public/images/` with clear filenames

## Visual identity

- Primary `#15966A`, dark green `#086B4C`, mint `#E8F7F0`, white `#FFFFFF`, light grey `#F5F8F7`, text `#24332E`
- Modern healthcare aesthetic; green gradients; soft shadows; rounded interactive cards; premium typography (non-default stack)
- Respect `prefers-reduced-motion`

## Pages

1. **Home** — Hero, about preview, featured services, why-choose teaser, contact CTA
2. **About** — Two-column intro (image + copy), contact CTA; no invented history
3. **Services** — Six editable service cards (assistance/info categories, not diagnoses)
4. **Categories** — Eight demo category cards with Explore → contact/services; demo content disclaimer
5. **Contact** — Phone, address, Get Directions, inquiry form, map link/embed fallback

## Contact form

- Fields: Full Name, Phone, Email (optional), Inquiry Type, Message
- Client validation + `POST /api/contact` server validation
- Honest feedback: accepted for processing / configure email later — no fake “email sent”
- No backend email provider in v1

## SEO

- Per-page metadata + Open Graph
- `sitemap.ts`, `robots.ts`
- Pharmacy/LocalBusiness JSON-LD with verified fields only

## Constraints

- No medical advice or prescription sales claims without verified inventory/compliance
- All CTAs real: `tel:`, maps link, nav routes, form validation
- Vercel-ready production build
