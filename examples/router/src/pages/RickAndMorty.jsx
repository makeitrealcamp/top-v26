import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  const context = useContext(Context);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      // Resolved promise
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        context.rickAndMorty.characters = data.results;
        context.redirectDetailsRoute = "/rickandmorty";
      })
      // Rejected
      .catch((error) => {
        console.log("Error", error);
      });
  };

  // Rendered
  useEffect(() => {
    getAllCharacters();
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
