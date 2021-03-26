import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './button';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1 className="hero-title">Hi, I am Jaim!</h1>
        <p className="hero-description">
          React Web Developer
        </p>
        <div className="hero-btns">
          <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get in touch
          </Button>
          <Button
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Get to now me!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
