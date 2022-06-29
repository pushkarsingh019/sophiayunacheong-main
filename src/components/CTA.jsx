import React from "react";

import Button from "./Button";

export default function CTA({ text, ctaText, redirect }) {
  return (
    <section className="section cta-section">
      <h1>{text}</h1>
      <br />
      <br />
      <Button redirect={redirect} text={ctaText} variant="cta-button" />
    </section>
  );
}
