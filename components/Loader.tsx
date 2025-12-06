"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="loader-overlay">
      {/* <div className="loader-inner"> */}
        {/* Logo */}
        <img
          src="/logo/small.jpg"
          alt="IndiKids Logo"
          className="loader-logo"
        />

        {/* Glowing orb */}
        <div className="loader-orb" />

        {/* Text */}
        <p className="loader-text">
          Designing a happy day…
        </p>
      {/* </div> */}
    </div>
  );
}
