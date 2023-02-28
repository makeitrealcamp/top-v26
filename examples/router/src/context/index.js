import React from "react";

export const initialContext = {
  rickAndMorty: {
    characters: [],
  },
  pokemon: {
    characters: [],
  },
  redirectDetailsRoute: "",
};
export const Context = React.createContext(initialContext);
