import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Indikids Preschool & Daycare · Bhubaneswar",
  description:
    "Premium early learning preschool & daycare in Bhubaneswar with activity centre – Taekwondo, Chess, Dance, Music & more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
