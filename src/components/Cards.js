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
