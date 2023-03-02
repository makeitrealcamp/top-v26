import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCharacters } from "../services/rickAndMortyAPI";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  const context = useContext(Context);

  const getData = async () => {
    const data = await getAllCharacters();
    context.rickAndMorty.characters = data;
    context.redirectDetailsRoute = "/rickandmorty";
    setCharacters(data);
  };

  // Rendered
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header>Header</Header>
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
