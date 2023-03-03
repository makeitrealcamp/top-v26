import React, { useEffect, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { useCharacters, useData } from "../hooks";
import { getAllCharacters } from "../services/rickAndMortyAPI";

const RickAndMorty = () => {
  //const { characters } = useCharacters("ram");
  const { data: characters } = useData([], getAllCharacters);
  const context = useContext(Context);

  // Rendered
  useEffect(() => {
    context.rickAndMorty.characters = characters;
    context.redirectDetailsRoute = "/rickandmorty";
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
