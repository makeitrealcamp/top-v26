import { StyleSheet, View } from "react-native";

export default function () {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
      <View style={styles.container2}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start", //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start", //replace with flex-end or center
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: "#2196F3",
  },
  box2: {
    backgroundColor: "#8BC34A",
  },
  box3: {
    backgroundColor: "#e3aa1a",
  },
});
