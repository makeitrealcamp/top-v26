import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { PokemonDetail } from "../components/PokemonDetail";
import { getOnePokemonById } from "../services/pokemonAPI";

const PokemonDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];
  const { id, name, image, hp, type, weight, specialattack, spdefense } =
    character || {};

  
 useEffect(() => {
   const item = characters.find((item) => item.id === +idParam);
   if (item) {
     setCharacter(item);
   } else {
     getData(idParam);
   }
 }, []);

  const getData = async () => {
    const data = await getOnePokemonById(idParam);
    setCharacter(data);
  };

  return (
    <PokemonDetail
      id={id}
      hp={hp}
      type={type}
      name={name}
      image={image}
      weight={weight}
      specialattack={specialattack}
      spdefense={spdefense}
    />
  );
};

export default PokemonDetails;
