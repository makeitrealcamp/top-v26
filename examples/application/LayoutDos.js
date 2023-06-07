import { StyleSheet, View, Text } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <View style={[styles.row1]}>
        <Text style={[styles.box]}>1</Text>
        <Text style={[styles.box2]}>1</Text>
        <Text style={[styles.box]}>1</Text>
      </View>
      <Text style={[styles.row2]}>2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row1: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
  row2: {
    flex: 3,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
  box: {
    borderWidth: 1,
    borderColor: "red",
    fontSize: 40,
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 2,
  },
  box3: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
});
