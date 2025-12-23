"use client";

import { useEffect, useState } from "react";
import WhyIndikids from "@/components/WhyIndikids";
import HeroSection from "@/components/sections/HeroSection";
import IntroCardsSection from "@/components/sections/IntroCardsSection";
import AnnouncementsSection from "@/components/sections/AnnouncementsSection";
import AboutSection from "@/components/sections/AboutSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import RhymesSection from "@/components/sections/RhymesSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import ConnectSection from "@/components/sections/ConnectSection";
import Lightbox from "@/components/ui/Lightbox";
import ScrollOrb from "@/components/ui/ScrollOrb";
import type { GalleryImage } from "@/types";
import MascotPopup from "@/components/MascotPopup";

export default function Home() {
  const [scrollScore, setScrollScore] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  // Gallery images
  const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 40 }, (_, i) => ({
    src: `/images/gallery/img${i + 1}.jpg`,
    alt: `Indikids moment ${i + 1}`,
  }));


  /* ----------------- scroll percentage (fixed) ----------------- */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;

        // Correct scroll height calculation
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        setScrollScore(Math.round(Math.min(100, Math.max(0, percent))));
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----------------- in-view animations ----------------- */
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setLightboxImg(image.src);
    setLightboxAlt(image.alt);
  };

  const handleLightboxClose = () => {
    setLightboxImg(null);
    setLightboxAlt("");
  };

  return (
    <>
      {/* FIXED ORB — now it works */}
      <ScrollOrb scrollScore={scrollScore} />



      <HeroSection />
      <IntroCardsSection />
      <AnnouncementsSection />
      <AboutSection />
      <WhyIndikids />
      <HighlightsSection />
      <ActivitiesSection />
      <RhymesSection />
      <AdmissionsSection />
      <TestimonialsSection />

      <GallerySection images={GALLERY_IMAGES} onImageClick={handleImageClick} />

      <Lightbox
        image={lightboxImg}
        alt={lightboxAlt}
        onClose={handleLightboxClose}
      />

      <FAQSection />
      <ContactSection />
      <ConnectSection />

      <footer className="footer">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Indikids Preschool &amp; Daycare · Bhubaneswar
          </span>
          <div className="footer-links">
            <a href="#about">Programs</a>
            <a href="#activities">Activities</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
