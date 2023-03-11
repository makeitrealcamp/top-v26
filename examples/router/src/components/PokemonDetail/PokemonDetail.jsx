import React from "react";
import "./pokemon-detail.scss";

const PokemonDetail = ({ id, species, name, status, image, gender }) => {
  return (
    <div className="pokemon-detail">
      <span>
        <strong>Id:</strong> {id}
      </span>
      <span>
        <strong>Species:</strong> {species}
      </span>
      <span>
        <strong>Gender:</strong> {gender}
      </span>
      <span>
        <strong>Name:</strong> {name}
      </span>
      <span>
        <strong>Status:</strong> {status}
      </span>
      <img src={image} alt="" />
    </div>
  );
};

export default PokemonDetail;
