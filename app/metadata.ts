import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Indikids Preschool & Daycare · Bhubaneswar",
    template: "%s | Indikids Preschool",
  },
  description:
    "A warm, joyful early learning space for children 2–10 years in Bhubaneswar. Preschool programs (Playgroup, Nursery, KG), daycare facilities, and activity academies including Taekwondo, Chess, Dance, Art, Music, and Phonics.",
  keywords: [
    "preschool Bhubaneswar",
    "daycare Bhubaneswar",
    "nursery school",
    "kindergarten",
    "playgroup",
    "activity classes for kids",
    "Taekwondo academy",
    "Chess academy",
    "Dance classes",
    "Music classes",
    "Art classes",
    "Phonics training",
    "early childhood education",
    "Patia preschool",
  ],
  authors: [{ name: "Indikids Preschool & Daycare" }],
  creator: "Indikids Preschool & Daycare",
  publisher: "Indikids Preschool & Daycare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://indikidsbbsr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indikidsbbsr.com",
    siteName: "Indikids Preschool & Daycare",
    title: "Indikids Preschool & Daycare · Bhubaneswar",
    description:
      "A warm, joyful early learning space for children 2–10 years. Preschool, daycare, and activity academies in Patia, Bhubaneswar.",
    images: [
      {
        url: "/logo/big.jpg",
        width: 1200,
        height: 630,
        alt: "Indikids Preschool & Daycare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indikids Preschool & Daycare · Bhubaneswar",
    description:
      "A warm, joyful early learning space for children 2–10 years. Preschool, daycare, and activity academies.",
    images: ["/logo/big.jpg"],
    creator: "@indikidsbbsr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Indikids Preschool & Daycare",
  description:
    "A warm, joyful early learning space for children 2–10 years in Bhubaneswar.",
  url: "https://indikidsbbsr.com",
  logo: "https://indikidsbbsr.com/logo/big.jpg",
  image: "https://indikidsbbsr.com/logo/big.jpg",
  telephone: "+917205502915",
  email: "indikidsbbsr@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "GF, Tower-6, Z1 Apartments, Patia",
    addressLocality: "Bhubaneswar",
    postalCode: "751024",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.303",
    longitude: "85.824",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "Early Childhood Education",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
  sameAs: [
    "https://m.facebook.com/1966791146973772/",
    "https://www.instagram.com/indikidsbbsr/",
    "https://x.com/indikidsbbsr",
  ],
};





