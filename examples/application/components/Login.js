import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "./Button";

export default function () {
  const [formData, setFormData] = useState({ user: "", password: "" });
  const { user, password } = formData;

  const handleChange = (values) => {
    console.log("values", values);
    setFormData((prev) => {
      console.log({ ...prev, ...values });
      return { ...prev, ...values };
    });
  };

  return (
    <View style={[styles.container, styles.margin]}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.item}>
        <Input label="email" name="user" value={user} setValue={handleChange} />
        <Input
          label="password"
          name="password"
          value={password}
          setValue={handleChange}
          secureTextEntry={true}
        />
        <Button label="login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  margin: {
    marginTop: 20,
  },
  item: {
    flex: 5,
    width: "100%",
  },
  text: {
    fontSize: 40,
  },
});
