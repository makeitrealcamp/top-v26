import { useState } from "react";
import { View, Text } from "react-native";
import { Login } from "../components/Login";

export default function ({ navigation }) {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });
  const { user, password } = form;

  const handleChange = (values) => {
    setForm((prev) => {
      return { ...prev, [values.name]: values.value };
    });
  };

  const handleClick = () => {
    console.log("Click", form, navigation);
    navigation.navigate("Home");
  };

  return (
    <Login
      user={user}
      password={password}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}
