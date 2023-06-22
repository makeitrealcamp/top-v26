import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ item }) => {
  return (
    <View style={styles.cardCharacter}>
      <Image style={styles.imageItem} source={{ uri: item.image }} />
      <Text style={styles.textItem}> {item.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardCharacter: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 5,
  },

  imageItem: {
    width: "100%",
    height: "100%",
  },

  textItem: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(255, 0, 255, 0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
