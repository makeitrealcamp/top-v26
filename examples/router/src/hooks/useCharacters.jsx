import { useState, useEffect } from "react";
import { getAllCharacters } from "../services/rickAndMortyAPI";
import { getAllPokemon } from "../services/pokemonAPI";

// Return characters of any serie
const useCharacters = (type) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    let data = [];
    if (type === "ram") {
      data = await getAllCharacters();
    } else if (type === "pokemon") {
       data = getAllPokemon();
    }
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return { characters };
};

export default useCharacters;
