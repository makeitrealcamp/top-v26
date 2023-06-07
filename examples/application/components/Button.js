import { Pressable, Text, StyleSheet } from "react-native";

export default function ({ label }) {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <Pressable onPress={handleClick}>
      <Text style={[styles.text, styles.button]}>{label}</Text>
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
