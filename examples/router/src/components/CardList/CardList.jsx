import React from "react";

import { Card } from "./Card";

import "./card_list.scss";

const CardList = ({ list }) => {
  return (
    <div className="card-list">
      {list.length >= 1 &&
        list.map(({ name, image }, index) => (
          <Card key={index} name={name} image={image} />
        ))}
    </div>
  );
};

export default CardList;
