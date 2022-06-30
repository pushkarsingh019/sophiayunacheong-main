import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// importing images
import sophiaProfilePic from "../images/sophiaProfilePic.png";

export default function AboutScreen() {
  function AboutSophia() {
    return (
      <section className="section about-section">
        <div className="about-info">
          <h1>About Sophia Yuna Cheong</h1>
          <br />
          <p>
            I am a 24-year-old content creator & community lover based in New
            York
            <br />
            <br />
            I hope to inspire many around the world to live a more fulfilling
            life & follow their path on their own terms.
            <br /> <br /> I value the power of being vulnerable to cultivate the
            strongest relationships with one another as a community. I hope we
            can go through this journey of life together.
          </p>
        </div>
        <div className="sophia-image">
          <img
            src={sophiaProfilePic}
            alt="Sophia Yuna Cheong"
          />
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
        <AboutSophia />
        <CTA
          text="Let’s go through this journey together."
          ctaText="Subscribe Now"
          variant="cta-button"
          redirect="https://www.youtube.com/c/SophiaYunaCheong"
        />
        <Footer />
      </main>
    </div>
  );
}
