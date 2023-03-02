import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCharacters } from "../services/rickAndMortyAPI";
import useCharacters from "../hooks/useCharacters";

const RickAndMorty = () => {
  const context = useContext(Context);
  const {
    data: characters = [],
    isLoading,
    isError,
  } = useCharacters(getAllCharacters, []);

  // Rendered
  useEffect(() => {
    context.rickAndMorty.characters = characters;
    context.redirectDetailsRoute = "/rickandmorty";
  }, [characters, context]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>We encountered an error fetching data</p>;

  return (
    <>
      <Header>Header</Header>
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
