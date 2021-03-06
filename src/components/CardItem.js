const CardItem = (props) => (
  <li className="cards__item">
    <div className="cards__item__container">
      <figure className="cards__item__pic-wrap" data-category={props.label}>
        <img
          className="cards__item__img"
          alt="Sunset Festival"
          src={props.src}
        />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{props.text}</h5>
        <div className="cards__item__links">
          <a
            href={props.url}
            className="cards__item__link"
            target="_blank"
            rel="noreferrer"
          >
            LIVE DEMO
          </a>
          <a
            href={props.repo}
            className="cards__item__link"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB REPO
          </a>
        </div>
      </div>
    </div>
  </li>
);
export default CardItem;
