import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function FormNotification({
  updateTitle,
  title,
  updateMessage,
  message,
  sendNotification,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateTitle}
        value={title}
      />
      <Text style={styles.text}>Message:</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateMessage}
        value={message}
      />
      <Button title="Send push notification" onPress={sendNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 50,
    borderWidth: 2,
    margin: 10,
    paddingLeft: 10,
    fontSize: 16,
    width: "80%",
  },
  text: {
    fontSize: 20,
    width: "80%",
    textAlign: "left",
  },
});
