import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards" id="projects">
      <h1 className="cards__title">Check my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/sunset_festival.jpg"
              text="Webpage created for the Sunset Festival following responsive design. Built with Html, Sass."
              label="HTML & CSS"
              url="https://jadx2.github.io/concert_capstone"
              repo="https://github.com/jadx2/concert_capstone"
            />
            <CardItem
              src="/images/chefsattic.png"
              text="A recipe blog to share your recipes and rate other ones. Built with Ruby on Rails, Sass, Rspec, Capybara."
              label="Ruby On Rails"
              url="https://sheltered-coast-24004.herokuapp.com"
              repo="https://github.com/jadx2/chefs_attic"
            />
            <CardItem
              src="/images/Screenshot-Newsweek.jpg"
              text="A clone of the 'Newsweek' newsletter following a responsive design. Built with Html, Bootstrap."
              label="Bootstrap"
              url="https://jadx2.github.io/newsweek_bootstrap"
              repo="https://github.com/jadx2/newsweek_bootstrap"
            />
            <CardItem
              src="/images/bakery.png"
              text="A web page created for Le Boulangerie bakery, using Javascript, functional programing, Html and CSS."
              label="HTML, CSS, Javascript"
              url="https://jadx2.github.io/restaurant-page/"
              repo="https://github.com/jadx2/restaurant-page"
            />
            <CardItem
              src="/images/weather-app.png"
              text="A weather app that can show in C or F. Written in Javascript and Bootstrap that makes calls to the OpenWatherMap API."
              label="Bootstrap, Javascript, AJAX, Webpack"
              url="https://jadx2.github.io/weather-app/"
              repo="https://github.com/jadx2/weather-app"
            />
            <CardItem
              src="/images/space-eagles.jpg"
              text="Space shooter remembering that good old arcade games. Written in Javascript and Phaser 3, Webpack as a bundler and tested with Jest."
              label="Javascript, Webpack, Phaser 3, Jest"
              url="https://space-eagles.netlify.app/"
              repo="https://github.com/jadx2/shooter-js"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
