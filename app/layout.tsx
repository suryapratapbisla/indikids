// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import { DM_Sans, Poppins } from "next/font/google";
import { siteMetadata, structuredData } from "./metadata";
import MascotPopup from "@/components/MascotPopup";

// --------------------------------------------------
// Fonts
// --------------------------------------------------
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: "/favicon.ico",
  },
};

// --------------------------------------------------
// Root Layout
// --------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning helps avoid minor mismatch warnings */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
       
        <MascotPopup />
        
        

        {/* Initial loader while page hydrates */}
        <Loader />

        {/* Sticky WhatsApp-style helper at bottom-left */}

        {/* Global navbar */}
        <Navbar />

        {/* Page transition wrapper */}
        <PageTransition>
          {/* #hero used as scroll target from navbar */}
          <main className="page">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
