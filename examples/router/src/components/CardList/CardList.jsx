import React from "react";

import { Card } from "./Card";

import "./card_list.scss";

const CardList = ({ list }) => {
  const goToDetails = () => {
    console.log("click ... goToDetails");
  };

  return (
    <div className="card-list">
      {list.length >= 1 &&
        list.map(({ id, name, image }, index) => (
          <Card
            key={index}
            name={name}
            image={image}
            id={id}
            handleClick={goToDetails}
          />
        ))}
    </div>
  );
};

export default CardList;
