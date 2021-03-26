import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Copyright 2021</p>
        <div className="footer-network">
          <a
            href="https://github.com/jadx2"
            className="footer-media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://twitter.com/thecatcodes"
            className="footer-media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jaimdelmar/"
            className="footer-media-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
