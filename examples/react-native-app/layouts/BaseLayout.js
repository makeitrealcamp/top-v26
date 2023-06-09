import { View, Text, StyleSheet } from "react-native";

const BaseLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.box1]}>1</Text>
      <Text style={[styles.box, styles.box2]}>2</Text>
    </View>
  );
};

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    width: "100%",
  },
  box: {
    color: "yellow",
    fontSize: 50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "pink",
  },
  box1: {
    backgroundColor: "white",
    height: 100,
  },
  box2: {
    flex: 4,
  },
});
