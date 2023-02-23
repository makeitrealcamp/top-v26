import React from "react";

import "./card.scss";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div class="card__img">
        <img src={image} alt={name} />
      </div>
      <h2 className="card__title">{name}</h2>
    </div>
  );
};

export default Card;
