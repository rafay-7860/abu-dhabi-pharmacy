# Abu Dhabi Pharmacy Website

Premium multi-page pharmacy website for **Abu Dhabi Pharmacy** (Najdah Street, Al Danah, Abu Dhabi).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + GSAP ScrollTrigger
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Pages

- `/` Home
- `/about` About
- `/services` Pharmacy services
- `/categories` Health categories (demo content)
- `/contact` Contact form, phone, maps
- `POST /api/contact` Validates inquiries (email delivery not configured yet)

## Replacing images

Swap files in `public/images/` using the same filenames (for example `hero-pharmacy.svg` → `hero-pharmacy.jpg` and update imports/paths if the extension changes).

## Editable content

- Business details: `lib/business.ts`
- Services, categories, inquiry types: `lib/content.ts`

## Deploy on Vercel

1. Push the repo to GitHub (or import the folder in Vercel).
2. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
3. Deploy.
