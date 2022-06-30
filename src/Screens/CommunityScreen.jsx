import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CTA from "../components/CTA";
import CommunityReview from "../components/CommunityReview";
import { communityReview } from "../data/reviews";

// importing data
import { featuresOne, featuresTwo } from "../data/features";
import FeatureCard from "../components/FeatureCard";

// importing images
import brandLogo from "../images/brandLogo.png";
import callScreenshot from "../images/communityScreenshot.png";

export default function CommunityScreen() {
  function HeroCommunity() {
    return (
      <section className="section community-hero">
        <div className="community-info">
          <h1>Content Creator Community.</h1>
          <br />
          <p>
            Uncomfortably Comfortable is the only content creator community that
            has creators from all over the world coming together monthly to
            share value and deepen relationships with one another.
          </p>
          <br />
          <br />
          <Button
            text="Join Now"
            redirect="https://docs.google.com/forms/d/e/1FAIpQLSfI-KwLBxsiG_NKoe4y-eBv0Gmx-BCVh8c_a2L2AXwCC94Dfw/viewform?usp=send_form"
            variant="cta-button"
          />
        </div>
        <div className="community-youtube-embed">
          <iframe
            width="500"
            height="280"
            src="https://www.youtube.com/embed/hKSEs_8okvI?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    );
  }

  function AboutCommunity() {
    return (
      <section className="section about-community-section">
        <div className="about-text">
          <img src={brandLogo}
            alt="Uncomfortably Comfortable"
          />
          <span>
            An unforgettable experience you don’t want missing in your life. We
            push each other out of our comfort zones to be the best versions of
            ourselves.
          </span>
        </div>
        <div className="community-screenshot">
          <img
            src={callScreenshot}
            alt="Uncomfortably Comfortable Live Call Screenshot"
          />
        </div>
      </section>
    );
  }

  function Features() {
    return (
      <section className="section features">
        <div className="features-text">
          <h1>The Perks...</h1>
          <br />
          <h3>What We Do</h3>
          <br />
          <br />
          <p>
            We have monthly calls, an engaging group chat, social events, game
            nights, and accountability. The content creator journey doesn’t have
            to be lonely anymore.
          </p>
        </div>
        <div className="features-grid">
          {featuresOne.map((feature) => {
            return (
              <FeatureCard
                iconClass={feature.imageSource}
                feature={feature.feature}
                featureDescription={feature.featureDescription}
              />
            );
          })}

          {featuresTwo.map((feature) => {
            return (
              <FeatureCard
                iconClass={feature.imageSource}
                feature={feature.feature}
                featureDescription={feature.featureDescription}
              />
            );
          })}
        </div>
      </section>
    );
  }

  function Review() {
    return (
      <section className="section review">
        <h1>What The Members Say</h1>
        <div className="reviews-grid">
          {communityReview.map((review) => {
            return (
              <CommunityReview
                name={review.name}
                title={review.title}
                review={review.review}
                imageSource={review.imageSource}
              />
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <div className="screen">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroCommunity />
        <AboutCommunity />
        <Features />
        <Review />
        <CTA
          text="The Creator Community You Need"
          ctaText="Join Now"
          redirect="https://docs.google.com/forms/d/e/1FAIpQLSfI-KwLBxsiG_NKoe4y-eBv0Gmx-BCVh8c_a2L2AXwCC94Dfw/viewform"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
