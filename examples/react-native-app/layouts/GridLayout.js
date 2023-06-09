import { View, Text, StyleSheet } from "react-native";
import styles from "./gridLayout.style";

const GridLayout = () => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, styles.row1]}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={[styles.row, styles.row2]}>
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>
      <View style={[styles.row, styles.row3]}>
        <View style={[styles.box, styles.box6]} />
      </View>
    </View>
  );
};

export default GridLayout;
