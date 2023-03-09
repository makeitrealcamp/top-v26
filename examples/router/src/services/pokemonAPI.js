export const getAllCharacters = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data.results;
  } catch (error) {
    return error;
  }
};


export const getOneCharacter = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};