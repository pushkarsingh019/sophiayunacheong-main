import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

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
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b9453be-724b-474a-913b-f1bdf559a62f%2FsophiaProfilePic.png?id=ba3ad05c-3c4e-4685-9177-86d909e1c697&table=block&spaceId=dd7d09ab-474d-488f-a7d2-5dcf3622c32c&width=2000&userId=6d425c69-b152-4c05-a677-5704d7281975&cache=v2"
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
