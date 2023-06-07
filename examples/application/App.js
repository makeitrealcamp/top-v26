import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Login from "./components/Login";
import LayoutUno from "./LayoutUno";
import LayoutBase from "./LayoutBase";
import LayoutDos from "./LayoutDos";

export default function App() {
  return <LayoutDos />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    //flexDirection: "row",
    justifyContent: "flex-start",
    //flexWrap: "wrap",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  flex: {
    flex: 0.5,
    backgroundColor: "blue",
  },
  box: {
    borderWidth: 0.2,
    borderColor: "red",
    fontSize: 40,
    flex: 1,
    width: "100%",
  },
  box1: {
    flex: 1,
    width: "50%",
  },
  box2: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
});
