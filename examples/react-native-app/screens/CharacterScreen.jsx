import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CardCharacter from "../components/CardCharacter";

export default function () {
  const [data, setData] = useState({
    characters: [],
    currentPage: 0,
  });

  const getCharactersAsync = async (page) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  };

  const getCharacters = async () => {
    let page = data.currentPage;
    page = page + 1;
    if (page <= 42) {
      const dataCharacters = await getCharactersAsync(page);
      setData((state) => ({
        characters: [...state.characters, ...dataCharacters.results],
        currentPage: page,
      }));
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const { characters } = data;

  return (
    <View>
      {characters && (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListFooterComponent={() => (
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Cargando...
            </Text>
          )}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => <CardCharacter item={item} />}
          onEndReached={() => {
            getCharacters();
          }}
        />
      )}
    </View>
  );
}
