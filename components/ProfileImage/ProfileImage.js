// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

// VECTOR ICONS
import { Ionicons } from "@expo/vector-icons";

const ProfileImage = ({handlePickAvatar, profileAddBtn, profileAvatar}) => {
  
  return (
      <View style={styles.avatarView}>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={handlePickAvatar}
        >
          <Image source={{ uri: profileAvatar }} style={styles.avatar} />
          {profileAddBtn && <Ionicons name="ios-add" size={24} color="black" />}
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  avatarPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  avatarView: {
    alignSelf: "center",
  },
});

export default ProfileImage;
