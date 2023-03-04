import React, { useEffect, useContext , useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { useCharacters, useData } from "../hooks";
import { getAllCharacters } from "../services/rickAndMortyAPI";
import { Loader } from "../components/Loader";

const RickAndMorty = () => {
  const [loader, setLoader] = useState(true);
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
      {loader && <Loader />}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default RickAndMorty;
