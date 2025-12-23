"use client";

import { useState } from "react";
import { FAQS } from "@/data/constants";

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="section" data-animate aria-labelledby="faq-title">
      <div className="section-header">
        <div className="section-header-badge">Questions</div>
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <p>
          A quick FAQ to answer common parent queries. You can always call us
          for more details.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, idx) => {
          const open = openFaqIndex === idx;
          return (
            <button
              key={item.q}
              type="button"
              className={"faq-item " + (open ? "faq-item-open" : "")}
              onClick={() => setOpenFaqIndex(open ? null : idx)}
              aria-expanded={open}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon">{open ? "−" : "+"}</span>
              </div>
              {open && <div className="faq-answer">{item.a}</div>}
            </button>
          );
        })}
      </div>
    </section>
  );
}





