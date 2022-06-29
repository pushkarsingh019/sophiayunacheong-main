import React from "react";
import ReviewCard from "../components/ReviewCard";

// importing data
import { reviews } from "../data/reviews";
import podcastApps from "../data/podcastApps";

// importing components for home screen
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const podcastLogoSource =
    "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0411fb1b-6d75-44de-9abe-6f9b035df213%2Fpodcast.jpeg?table=block&id=95349334-e85f-461d-bfca-d53f118978a4&spaceId=dd7d09ab-474d-488f-a7d2-5dcf3622c32c&width=2000&userId=6d425c69-b152-4c05-a677-5704d7281975&cache=v2";

  function Hero() {
    return (
      <section className="hero">
        <h1 className="hero-text">
          I'm here to help you be the hero of your own movie called <b>Life</b>.
          <br />
          <br />
          It's simple. <br /> I want to empower all of us to get out of our
          comfort zones and live our best life.
        </h1>
      </section>
    );
  }

  function YouTubeSection() {
    return (
      <section className="section youtube-section">
        <h1>YouTube</h1>
        <br />
        <h3>Self-Development, Lifestyle, Post-Grad Content.</h3>
        <div className="section-grid">
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/ezEABthX1_o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/6EbWYNxuufg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/kYTzNuYfIBc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    );
  }

  function CommunitySection() {
    return (
      <section className="section community-section">
        <h1>Uncomfortably Comfortable</h1>
        <br />
        <h3>
          Your go-to place for a tight-knit, inspiring content creator
          community.
        </h3>
        <div className="section-grid">
          {reviews.map((review) => {
            return (
              <ReviewCard
                text={review.review}
                image={review.imageSource}
                name={review.name}
                title={review.title}
              />
            );
          })}
        </div>
      </section>
    );
  }

  function PodcastSection() {
    return (
      <section className="section podcast-section">
        <div className="podcast-info">
          <h1>The Good Question Podcast</h1>
          <br />
          <h3>Your go-to podcast for life’s toughest questions.</h3>
          <br />
          <Button
            redirect="https://anchor.fm/sophia-yuna-cheong"
            variant="cta-button"
            text="Listen Now"
          />
          <div className="podcast-apps">
            {podcastApps.map((app) => {
              return (
                <img
                  className="podcast-app-logo"
                  src={app.imageSource}
                  alt={app.alt}
                  onClick={() => {
                    window.location.replace(app.redirectLink);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="podcast-image">
          <img src={podcastLogoSource} alt="The Good Question Podcast Logo" />
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
        <Hero />
        <YouTubeSection />
        <CommunitySection />
        <PodcastSection />
        <CTA
          text="Join the Family"
          ctaText="Subscribe"
          redirect="https://www.youtube.com/c/SophiaYunaCheong"
        />
        <Footer />
      </main>
    </div>
  );
}
