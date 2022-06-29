import React from "react";

export default function FeatureCard({
  iconClass,
  feature,
  featureDescription
}) {
  return (
    <div className="feature-card">
      <img src={iconClass} alt={feature} />
      <br />
      <h2>{feature}</h2>
      <br />
      <p className="feature-description">{featureDescription}</p>
    </div>
  );
}
