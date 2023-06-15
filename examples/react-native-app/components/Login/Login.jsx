import { useState } from "react";
import { View } from "react-native";
import { Input } from "../Input";

export default function () {
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

  return (
    <View>
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
    </View>
  );
}
