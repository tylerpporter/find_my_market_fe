// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "../../utilities/UserPermissions";

// VECTOR ICONS
import { Ionicons } from "@expo/vector-icons";

const Profile = (props) => {
  const [avatar, setAvatar] = useState("");

  const handlePickAvatar = async () => {
    UserPermissions.getCameraPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <View>
      <View style={styles.avatarView}>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={handlePickAvatar}
        >
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Ionicons name="ios-add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfoView}>
        <Text style={styles.profileInfo}>Username:</Text>
        <Text style={styles.profileInfo}>
          Email: {props.route.params.user.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#E1E2E6",
    borderRadius: 50,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarView: {
    alignSelf: "center",
  },
  profileInfoView: {
    alignSelf: "center",
    marginTop: 50,
  },
  profileInfo: {
    padding: 10,
  },
});

export default Profile;
