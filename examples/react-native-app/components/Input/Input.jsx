import { View, Text, TextInput } from "react-native";
import styles from "./stlyle";

export default function ({ label, value, setValue, name, ...props }) {
  const handleChange = (text) => {
    setValue({ name, value: text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        {...props}
      />
    </View>
  );
}
