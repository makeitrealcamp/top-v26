import React, { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_shiny;
  };

  //Async / await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();

    // For común
    /*for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
    }*/

    // For in = (index)
    /*for (let index in data.results) {
      console.log("For in get index", index);
      const item = data.results[index];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
    }*/

    // For of (value)
    for (let item of data.results) {
      console.log("For of get value of each item", item);
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image: image });
    }
    setLoader(false);
    setCharacters(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const renderPokemons = () => <CardList list={characters} />;

  return (
    <>
      <Header>Header</Header>
      {loader && <div>Loading....</div>}
      {characters.length >= 1 && renderPokemons()}
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;
