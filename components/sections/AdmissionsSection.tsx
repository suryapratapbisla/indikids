"use client";

import { ADMISSIONS_HIGHLIGHTS } from "@/data/constants";
import AIHelperForm from "@/components/forms/AIHelperForm";

export default function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="section-admissions"
      data-animate
      aria-labelledby="admissions-title"
    >
      <div className="section-header">
        <div className="section-header-badge">Admissions 2025–26</div>
        <h2 id="admissions-title">
          Apply Admission
        </h2>
        <p>
          Seats fill quickly each academic year. Get in touch to explore the
          right program for your child.
        </p>
      </div>

      <div className="admissions-grid">
        <div className="admissions-card">
          <div className="admissions-chip">Preschool Programs</div>
          <h3>Playgroup · Nursery · KG (2–5 Years)</h3>
          <ul aria-label="Preschool program features">
            <li>Child-centric, activity-based curriculum.</li>
            <li>Focus on school readiness and overall development.</li>
            <li>Parent orientation and settling support.</li>
          </ul>
          <p className="admissions-note">
            Call us on <strong>7205502915</strong> to know batch timings and
            fee details, or send an enquiry below.
          </p>
        </div>

        <div className="admissions-card">
          <div className="admissions-chip admissions-chip-soft">
            Daycare &amp; Activities
          </div>
          <h3>Daycare &amp; After-School Programs</h3>
          <ul aria-label="Daycare and activity highlights">
            {ADMISSIONS_HIGHLIGHTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="admissions-note">
            Activity classes are held during weekday evenings and weekend
            mornings at the campus.
          </p>
        </div>
      </div>

      <AIHelperForm />
    </section>
  );
}

