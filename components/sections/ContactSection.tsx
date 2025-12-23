"use client";

import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section" data-animate>
      <div className="section-header">
        <div className="section-header-badge">Contact Us</div>
        <h2>Call, Message or Visit Us</h2>
        <p>
          Reach out for admissions, daycare timings or activity details. We
          are happy to assist.
        </p>
      </div>

      <div className="contact-layout contact-layout-split">
        <div className="contact-card">
          <h3>Connect with Indikids</h3>
          <p>Call or message us for program details and admissions.</p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:7205502915">7205502915</a> /{" "}
            <a href="tel:9899635818">9899635818</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:indikidsbbsr@gmail.com">
              indikidsbbsr@gmail.com
            </a>
          </p>

          <h3>Indikids Preschool &amp; Daycare</h3>
          <p>
            <strong>Branch 1</strong>
            <br />
            GF, Tower-6, Z1 Apartments, Patia, Bhubaneswar 751024
          </p>
          <p>
            <strong>Branch 2</strong>
            <br />
            Triplex-32, Skytech Infinity Villa, Raghunathpur Jalli, Patia,
            Bhubaneswar 751024
          </p>

          <p className="contact-note">
            Activity classes are conducted during evening hours on weekdays
            and morning hours on weekends.
          </p>
          <p className="hours-note">
            <strong>Hours:</strong> 09:00 am – 07:00 pm (Mon–Sat)
          </p>

          <a
            href="https://wa.me/917205502915"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            💬 Message us on WhatsApp
          </a>

          <div className="map-embed">
            <iframe
              title="Indikids Preschool Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d85.824!3d20.303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
            />
          </div>
        </div>

        <div className="contact-visual">
          <div className="contact-visual-circle">
            <Image
              src="/images/contact/image.png"
              alt="Happy child at Indikids Preschool"
              width={600}
              height={600}
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}





