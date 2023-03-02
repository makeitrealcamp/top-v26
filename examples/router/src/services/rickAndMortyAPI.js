/*const getAllCharacters = () => {
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
};*/

const getAllCharacters = async() => {
  const url = "https://rickandmortyapi.com/api/character";
  const request = fetch(url)
  
}
