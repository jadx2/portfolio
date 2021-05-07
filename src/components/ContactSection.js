import React from 'react';
import './ContactSection.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="contact__title">Contact Me!</h1>
      <p className="contact__content">
        Get in touch and let's build something amazing!
      </p>
      <p className="contact__email">delmarjaim@gmail.com</p>
      <div className="contact__links">
        <a
          href="https://github.com/jadx2"
          className="contact__link github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://twitter.com/thecatcodes"
          className="contact__link twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jaimdelmar/"
          className="contact__link linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
