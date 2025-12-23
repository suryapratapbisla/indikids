"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct mailto link
    const mailtoLink = `mailto:indikidsbbsr@gmail.com?subject=Enquiry from ${name}&body=Name: ${name}%0D%0AMobile: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Simulate success for UI
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after success
    const form = e.currentTarget;
    form.reset();

    // Show success message
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send an Enquiry</h3>

      <label>
        Name*
        <input type="text" name="name" required />
      </label>
      <label>
        Mobile No*
        <input type="tel" name="phone" required />
      </label>
      <label>
        Email*
        <input type="email" name="email" required />
      </label>
      <label>
        Message*
        <textarea name="message" required />
      </label>

      {submitStatus === "success" && (
        <div className="form-success-message">
          Thank you! Our team will reach out to you shortly.
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="contact-note">
        We value your time. Our team will get back to you as soon as
        possible with relevant details.
      </p>
    </form>
  );
}





