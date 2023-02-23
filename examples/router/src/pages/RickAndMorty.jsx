import React, { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      // Resolved promise
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
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
