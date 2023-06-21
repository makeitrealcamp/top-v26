import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfileImage = ({ sourceImg }) => (
  <View style={styles.profileImageContainer}>
    <Image style={styles.profileImage} source={sourceImg} />
  </View>
);

export default ProfileImage;

const styles = StyleSheet.create({
  profileImageContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },

  profileImage: {
    backgroundColor: "blue",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
