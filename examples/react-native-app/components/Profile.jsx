import react, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Input } from "./Input";
import ProfileImage from "./ProfileImage";

const Profile = () => {
  const [imageURI, setImageURI] = useState("");

  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
  });

  const handleChangeInput = (values) => {
    setForm((state) => ({ ...state, [values.name]: values.value }));
  };

  const saveProfile = () => {
    const { email, name, lastname } = form;
    Alert.alert(`
    su perfil es: ${name} ${lastname} <${email}>
    `);
    // go to endpoint

    console.log("FORM", form);
  };

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    const { canceled, assets } = result;
    if (!canceled) {
      setImageURI(assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.profileScreen}>
      <View style={styles.profileImage}>
        <TouchableOpacity onPress={uploadImage}>
          <ProfileImage
            sourceImg={{
              uri: imageURI ? imageURI : "https://picsum.photos/200/200",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileTitle}>
        <Text style={styles.title}>YOUR PROFILE</Text>
      </View>
      <View style={styles.profileForm}>
        <Input
          name="email"
          label="EMAIL:"
          value={form.email}
          setValue={handleChangeInput}
        />
        <Input
          name="name"
          label="NAME:"
          value={form.name}
          setValue={handleChangeInput}
        />
        <Input
          name="lastname"
          label="LASTNAME:"
          value={form.lastname}
          setValue={handleChangeInput}
        />
        <Button title="save" onPress={saveProfile} />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
  },

  profileTitle: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    textAlign: "center",
  },

  profileImage: {
    flex: 1,
    minHeight: 210,
  },

  profileForm: {
    flex: 3,
    padding: 20,
  },
});
