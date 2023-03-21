export const getAllPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  try {
    const request = await fetch(url);
    const data = await request.json();
    
    const pokemons = []

    for (let item of data.results) {
      console.log("For of get value of each item", item);
      const detail = await getOnePokemon(item.url);
      console.log(detail);
      pokemons.push({ name: item.name, ...detail });
    }

    return pokemons;
    
  } catch (error) {
    return error;
  }
};


 export const getOnePokemon = async (url) => {
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      image: data.sprites.front_default,
      id: data.id,
      name: data.name,
      [data.stats[0].stat.name]: data.stats[0].base_stat, //hp stat
      specialattack: data.stats[3].base_stat, //special-attack stat
      spdefense: data.stats[4].base_stat, //special-defense stat
      type: data.types[0].type.name, // type
      weight: data.weight, //weigth
    };
  } catch (error) {
    return error;
  }
};

export const getOnePokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${+id}`;
    
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      image: data.sprites.front_default,
      id: data.id,
      name: data.name,
      [data.stats[0].stat.name]: data.stats[0].base_stat, //hp stat
      specialattack: data.stats[3].base_stat, //special-attack stat
      spdefense: data.stats[4].base_stat, //special-defense stat
      type: data.types[0].type.name, // type
      weight: data.weight, //weigth
    };
  } catch (error) {
    return error;
  }
}

// const getOnePokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   try {
//     const request = await fetch(url);
//     const data = await request.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
