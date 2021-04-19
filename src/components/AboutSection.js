import React, { useRef } from 'react';
import './AboutSection.css';

function About() {
  return (
    <div className="about" id="about">
      <h1 className="about__title">About Me!</h1>
      <div className="about__container">
        <p className="about__content">
          Hi! My name is Jaim and I love to write code,
          solve problems and contribute to projects. I enjoy
          designing and to develop software that is
          appealing to the view and functional. Don't
          hesitate to contact me.
        </p>
        <div className="about__cards">
          <div className="about__cards__container">
            <div className="about__card">
              <i className=" about__card__icon fas fa-globe"></i>
              <h3 className="about__card__title">
                Languages
              </h3>
              <div className="about__card__items">
                <p className="about__card__item">Html5</p>
                <p className="about__card__item">CSS3</p>
                <p className="about__card__item">
                  JavaScript
                </p>
                <p className="about__card__item">Ruby</p>
              </div>
            </div>
            <div className="about__card">
              <i className=" about__card__icon fas fa-cubes"></i>
              <h3 className="about__card__title">
                Frameworks
              </h3>
              <div className="about__card__items">
                <p className="about__card__item">Sass</p>
                <p className="about__card__item">React</p>
                <p className="about__card__item">
                  Ruby on Rails
                </p>
              </div>
            </div>
            <div className="about__card">
              <i className=" about__card__icon fas fa-tools"></i>
              <h3 className="about__card__title">Tools</h3>
              <div className="about__card__items">
                <p className="about__card__item">Vim</p>
                <p className="about__card__item">
                  Terminal
                </p>
                <p className="about__card__item">Rspec</p>
                <p className="about__card__item">Linux</p>
                <p className="about__card__item">CD/CI</p>
                <p className="about__card__item">Git</p>
                <p className="about__card__item">TDD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
