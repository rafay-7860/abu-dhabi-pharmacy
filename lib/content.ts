export const services = [
  {
    id: "prescription-assistance",
    title: "Prescription Assistance",
    description:
      "Speak with our pharmacy team for help understanding prescriptions and related pharmacy questions.",
    icon: "ClipboardPlus",
  },
  {
    id: "otc-information",
    title: "Over-the-Counter Medicine Information",
    description:
      "Ask about common over-the-counter options and product information available at the pharmacy.",
    icon: "Pill",
  },
  {
    id: "healthcare-products",
    title: "Healthcare Products",
    description:
      "Inquire about everyday healthcare products suited to your needs and preferences.",
    icon: "HeartPulse",
  },
  {
    id: "vitamins-supplements",
    title: "Vitamins and Supplements",
    description:
      "Explore vitamins and supplement product information with guidance from our team.",
    icon: "Leaf",
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description:
      "Find personal care essentials and ask our staff for product details in store.",
    icon: "Sparkles",
  },
  {
    id: "wellness-products",
    title: "Wellness Products",
    description:
      "Discover wellness-related products and get friendly assistance with your inquiries.",
    icon: "Flower2",
  },
] as const;

export const categories = [
  {
    id: "general-healthcare",
    title: "General Healthcare",
    description: "Everyday healthcare product inquiries for you and your family.",
    image: "/images/category-general-healthcare.svg",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Personal care essentials and product information support.",
    image: "/images/category-personal-care.jpg",
  },
  {
    id: "vitamins-supplements",
    title: "Vitamins and Supplements",
    description: "Demo category for vitamins and supplement product inquiries.",
    image: "/images/category-vitamins.jpg",
  },
  {
    id: "skin-care",
    title: "Skin Care",
    description: "Skin care product information and in-store assistance.",
    image: "/images/category-skin-care.svg",
  },
  {
    id: "baby-care",
    title: "Baby Care",
    description: "Baby care product questions answered by our pharmacy team.",
    image: "/images/category-baby-care.svg",
  },
  {
    id: "first-aid",
    title: "First Aid",
    description: "First aid product information for common household needs.",
    image: "/images/category-first-aid.svg",
  },
  {
    id: "wellness",
    title: "Wellness Products",
    description: "Wellness-focused product categories available for inquiry.",
    image: "/images/category-wellness.svg",
  },
  {
    id: "medical-supplies",
    title: "Medical Supplies",
    description: "Ask about medical supply products stocked at the pharmacy.",
    image: "/images/category-medical-supplies.svg",
  },
] as const;

export const whyChooseUs = [
  {
    id: "location",
    title: "Convenient Abu Dhabi Location",
    description:
      "Visit us on Najdah Street in Al Danah, Zone 1 — easy to reach in Abu Dhabi.",
    icon: "MapPin",
  },
  {
    id: "assistance",
    title: "Pharmacy Assistance",
    description:
      "Our team is ready to help with pharmacy-related questions and product inquiries.",
    icon: "HandHeart",
  },
  {
    id: "inquiries",
    title: "Healthcare Product Inquiries",
    description:
      "Contact us for information about healthcare and wellness products.",
    icon: "MessageCircleQuestion",
  },
  {
    id: "customer-focused",
    title: "Customer-Focused Service",
    description:
      "We aim to provide clear, respectful support for every visitor and caller.",
    icon: "Users",
  },
  {
    id: "phone",
    title: "Easy Phone Contact",
    description:
      "Reach Abu Dhabi Pharmacy quickly by phone for directions or questions.",
    icon: "Phone",
  },
  {
    id: "support",
    title: "Friendly Support",
    description:
      "Speak with a welcoming team that prioritizes clear communication.",
    icon: "Smile",
  },
] as const;

export const inquiryTypes = [
  "General Inquiry",
  "Pharmacy Services",
  "Product Information",
  "Location / Directions",
  "Other",
] as const;
