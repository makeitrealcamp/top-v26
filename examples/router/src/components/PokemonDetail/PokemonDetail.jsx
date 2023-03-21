import React from "react";
import "./pokemon-detail.scss";

const PokemonDetail = ({
  id,
  name,
  image,
  hp,
  type,
  weight,
  specialattack,
  spdefense,
}) => {
  return (
    <div className="pokemon-detail">
      <span >
        <strong>Id:</strong> {id}
      </span>

      <span>
        <strong>Name:</strong> {name}
      </span>
      <span>
        <strong>Tipo:</strong> {type}
      </span>
      <span>
        <strong>Poder:</strong> {hp}
      </span>
      <span>
        <strong>Peso:</strong> {weight}
      </span>
      <span>
        <strong>Ataque Especial:</strong> {specialattack}
      </span>
      <span>
        <strong>Defensa Especial:</strong> {spdefense}
      </span>
      <div className="poke2">
      <img src={image} alt="" className="poke"/>
      </div>
    </div>
  );
};

export default PokemonDetail;
