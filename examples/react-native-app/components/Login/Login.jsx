import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Input } from "../Input";
import Button from "../Button";

const windowHeight = Dimensions.get("window").height;

export default function ({ user, password, handleChange, handleClick }) {
  return (
    <View style={[styles.container, styles.margin]}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.item}>
        <Input
          value={user}
          setValue={handleChange}
          label="Username:"
          name="user"
        />
        <Input
          value={password}
          setValue={handleChange}
          label="Password:"
          name="password"
          secureTextEntry={true}
        />
        <Button text="Login" handleClick={handleClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flex: 1,
    // height: windowHeight
  },
  margin: {
    marginTop: 20,
  },
  item: {
    flex: 5,
    width: "100%",
  },
  text: {
    flex: 2,
    fontSize: 40,
  },
});
