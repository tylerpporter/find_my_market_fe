// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const ProfileInfo = ({setModalVisible, modalVisible, profileUser}) => {
  return (
    <View style={styles.profileInfoView}>
      <View style={styles.profileInfoView}>
        <Text style={styles.profileInfo}>Username:</Text>
        <Text style={styles.profileInfo}>{profileUser.username}</Text>
        <Text style={styles.profileInfo}>Email:</Text>
        <Text style={styles.profileInfo}>{profileUser.email}</Text>
      </View>

      <TouchableOpacity style={styles.updateInfoButton}>
        <Button
          color="black"
          title="Update your information"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    padding: 6,
    fontSize: 16,
  },
  profileInfoView: {
    backgroundColor: "#E1E2E6",
    marginTop: "2%",
    width: "80%",
    alignSelf: "center",
    height: "25%",
    borderRadius: 5,
  },
  updateInfoButton: {
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 90,
    width: "70%",
    alignSelf: "center",
  },
});

export default ProfileInfo;
