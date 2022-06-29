import React from "react";

export default function ReviewCard({ text, name, image, title }) {
  return (
    <div className="card">
      <span>
        <p>{text}</p>
      </span>
      <div className="reviewer-info">
        <img src={image} alt={name} />
        <div className="reviewer-name-title">
          <h4>{name}</h4>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
}
