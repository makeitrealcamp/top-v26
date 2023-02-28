import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { Context } from "../../context";
import "./card_list.scss";

const CardList = ({ list }) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const { redirectDetailsRoute } = context;

  const goToDetails = (id) => {
    // redirect to details
    navigate(`${redirectDetailsRoute}/${id}`);
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
