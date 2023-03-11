import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { PokemonDetail } from "../components/PokemonDetail";
import { getOneCharacter } from "../services/rickAndMortyAPI";

const PokemonDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];
  const { id, species, name, status, image, gender } = character || {};

  useEffect(() => {
    const item = characters.find((item) => item.id === +idParam);
    if (item) {
      setCharacter(item);
    } else {
      getData(idParam);
    }
  }, []);

  const getData = async (id) => {
    const data = await getOneCharacter(id);
    setCharacter(data);
  };

  return (
    <PokemonDetails
      id={id}
      species={species}
      name={name}
      status={status}
      image={image}
      gender={gender}
    />
  );
};

export default PokemonDetails;
