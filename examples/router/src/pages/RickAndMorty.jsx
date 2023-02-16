import React, { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      <div>
        {characters.length >= 1 &&
          characters.map((character, index) => (
            <div key={index}>
              {character.name}
              <img src={character.image} alt={character.name} />
            </div>
          ))}
      </div>
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
