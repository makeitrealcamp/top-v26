import React from "react";

import "./card.scss";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      {name}
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
