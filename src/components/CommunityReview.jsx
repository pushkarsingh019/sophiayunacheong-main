import React from "react";

function CommunityReview({ imageSource, name, title, review }) {
  return (
    <div className="community-review">
      <div className="review-text">{review}</div>
      <div className="reviewer-image">
        <img src={imageSource} alt={`review by ${name}`} />
      </div>
      <div>
        <p className="name">{name}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default CommunityReview;
