import { StyleSheet, Pressable, Text } from "react-native";

export default function ({ text, handleClick }) {
  return (
    <Pressable onPress={handleClick}>
      <Text style={[styles.button, styles.text]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    width: "100%",
    borderRadius: 4,
  },
});
