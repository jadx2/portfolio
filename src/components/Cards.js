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
              text="Project made with html and css for the fictional festival"
              label="HTML & CSS"
              path="https://jadx2.github.io/concert_capstone"
            />
            <CardItem
              src="/images/chefsattic.png"
              text="A recipe blog"
              label="Ruby On Rails"
              path="https://sheltered-coast-24004.herokuapp.com"
            />
            <CardItem
              src="/images/Screenshot-Newsweek.jpg"
              text="A clone of the 'Newsweek' newsletter"
              label="Bootstrap"
              path="https://jadx2.github.io/newsweek_bootstrap"
            />
            <CardItem
              src="/images/tnw.png"
              text="A clone of 'The Next Web' magazine"
              label="HTML & CSS"
              path="https://github.com/jadx2/tnw_responsive"
            />
            <CardItem
              src="/images/sunset_festival.jpg"
              text="Project made with html and css for the fictional festival"
              label="HTML & CSS"
              path="https://jadx2.github.io/concert_capstone"
            />
            <CardItem
              src="/images/sunset_festival.jpg"
              text="Project made with html and css for the fictional festival"
              label="HTML & CSS"
              path="https://jadx2.github.io/concert_capstone"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
