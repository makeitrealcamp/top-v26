import { StyleSheet, View, Text } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.box1]}>1</Text>
      <Text style={[styles.box, styles.box1]}>2</Text>

      <Text style={[styles.box]}>3</Text>
      <Text style={[styles.box]}>4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    //flexDirection: "row",
    //flexWrap: "wrap",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    borderWidth: 1,
    borderColor: "red",
    fontSize: 40,
    flex: 1,
    width: "100%",
  },
  box1: {
    flex: 1,
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
