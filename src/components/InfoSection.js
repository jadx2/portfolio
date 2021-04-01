import React from 'react';
import '../App.css';
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="info-container">
      <img
        src="/images/background1.jpg"
        alt="background"
        className="background"
      />
      <div className="info-card">
        <h1 className="info-title">About Me!</h1>
        <div className="info-content">
          <figure className="info-pic">
            <img src="/images/me.jpg" alt="Me!" />
          </figure>
          <p className="info-text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia laboriosam eum omnis
            quaerat quisquam. Fugit eum eius aperiam velit
            sequi quas consequuntur illo quod, mollitia
            molestias nulla maxime odit delectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
