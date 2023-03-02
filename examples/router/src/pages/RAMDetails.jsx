import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { RAMDetail } from "../components/RAMDetail";
import { getOneCharacter } from "../services/rickAndMortyAPI";

const RAMDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];
  const { id, species, name, status, image, gender } = character || {};

  useEffect(() => {
    const item = characters.find((item) => item.id === +idParam);
    if (item) {
      setCharacter(item);
    } else {
      getData(idParam);
    }
  }, []);

  const getData = async (id) => {
    const data = await getOneCharacter(id);
    setCharacter(data);
  };

  return (
    <RAMDetail
      id={id}
      species={species}
      name={name}
      status={status}
      image={image}
      gender={gender}
    />
  );
};

export default RAMDetails;
