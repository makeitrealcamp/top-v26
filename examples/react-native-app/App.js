import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BaseLayout from "./layouts/BaseLayout";
import GridLayout from "./layouts/GridLayout";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} style="auto" />
      <GridLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  text: {
    color: "red",
    fontSize: 30,
    backgroundColor: "yellow",
    padding: 23,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 40,
    width: "100%",
  },
});
