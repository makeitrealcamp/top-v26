import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function ({ name, label, value, setValue, ...props }) {
  const handleChange = (value) => {
    console.log(value);
    setValue({ [name]: value });
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.input}
        value={value}
        onChangeText={handleChange}
        {...props}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    borderRadius: 4,
  },
});
