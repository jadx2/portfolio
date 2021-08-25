import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container" id="hero">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1 className="hero-title">Hi, I am Jaim!</h1>
        <p className="hero-description">Fullstack Web Developer</p>
        <div className="hero-network">
          <a
            href="https://github.com/jadx2"
            className="media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://twitter.com/thecatcodes"
            className="media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jaimdelmar/"
            className="media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
