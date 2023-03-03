import React from "react";

import "./card.scss";

const Card = ({ name, image, id, handleClick }) => {
  const redirect = () => {
    handleClick(id);
  };

  return (
    <div className="card" onClick={redirect}>
      <div className="card__img">
        <img src={image} alt={name} />
      </div>
      <h2 className="card__title">{name}</h2>
    </div>
  );
};

export default Card;
