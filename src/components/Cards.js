import '../assets/styles/Cards.css';
import CardItem from './CardItem';
import PROJECTS from '../data/projects';

const Cards = () => (
  <div className="cards" id="projects">
    <h1 className="cards__title">Check my projects!</h1>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          {PROJECTS.map((project) => (
            <CardItem
              key={project.src}
              src={project.src}
              text={project.text}
              label={project.label}
              url={project.url}
              repo={project.repo}
            />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Cards;
