import React, { useEffect, useContext, useState } from "react";

import Loader from "../components/Loader/Loader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { useCharacters, useData } from "../hooks";
import { getAllCharacters } from "../services/rickAndMortyAPI";



const RickAndMorty = () => {
  //const { characters } = useCharacters("ram");
  const [loader, setLoader] = useState(true);
  const { data: characters } = useData([], getAllCharacters);
  
  const context = useContext(Context);
  // Rendered

  function myGreeting() {
    console.log("Terminaron los 5s de espera..")
    setLoader(false)
  }

  useEffect(() => {
    context.rickAndMorty.characters = characters;
    context.redirectDetailsRoute = "/rickandmorty";

  }, []);
  setTimeout(myGreeting, 5000)

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader props="rickAndMorty" />}
      {!loader  && <CardList list={characters} />}
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
