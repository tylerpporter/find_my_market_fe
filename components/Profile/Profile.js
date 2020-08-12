// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "../../utilities/UserPermissions";
import { useForm, Controller } from "react-hook-form";

// VECTOR ICONS
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// fetch call
import { updateProfile, updateProfileImage } from "../../apiCalls"

const Profile = (props) => {

  //this is the hook for setting of the avatar image on the profile page
  const [profileAvatar, setProfileAvatar] = useState(props.route.params.avatar);
  //this is the hook for the setting of the add button icon for the profile page image
  const [profileAddBtn, setProfileAddBtn] = useState(props.route.params.addBtn);
  // this is for the Modal to update user information
  const [modalVisible, setModalVisible] = useState(false);
  //This is the hook for the error handling message
  const [error, setError] = useState(false);
  // This is for form validation and storing Inputs
  const { control, handleSubmit, errors } = useForm();
  // This is the hook for updating the user profile
  const [profileUser, setProfileUser] = useState(props.route.params.user)

  // This is for Controller
  const usernameInputRef = React.useRef();
  const emailInputRef = React.useRef();

  // This is the method to choose a user image
  const handlePickAvatar = async () => {
    const setUser = props.route.params.setUser;

    UserPermissions.getCameraPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    setProfileAddBtn(false);
    props.route.params.setAddBtn(false);

    if (!result.cancelled) {
      let image = result.uri
      updateProfileImage(profileUser, setUser, image)
      setProfileAvatar(result.uri);
      props.route.params.setAvatar(result.uri);
    }
  };

  // FETCH CALL
  const onSubmit = async (data) => {
    let setUser = props.route.params.setUser;

    let { username, email } = data

    let updatedUser = await updateProfile(username, email, profileUser, setUser)
    setProfileUser(updatedUser)
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.profileBackground}>
      <View style={styles.avatarView}>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={handlePickAvatar}
        >
          <Image source={{ uri: profileAvatar }} style={styles.avatar} />
          {profileAddBtn && <Ionicons name="ios-add" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfoView}>
        <View style={styles.profileInfoView}>
          <Text style={styles.profileInfo}>
            Username:{"\n"}
            {profileUser.username}
          </Text>
          <Text style={styles.profileInfo}>
            Email:{"\n"}
            {profileUser.email}
          </Text>
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

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.profileModalView}>
            <View style={styles.closeIcon}>
              <AntDesign
                name="close"
                size={30}
                color="black"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <Text style={styles.header}>Please update your</Text>
            <Text style={styles.header}>username and/or email.</Text>
            <Text style={styles.label}>Username:</Text>
            <Controller
              name="username"
              control={control}
              onFocus={() => {
                usernameInputRef.current.focus();
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  testID="registerUsername"
                  placeholder={profileUser.username}
                  color="black"
                  style={styles.profileUsernameInput}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={usernameInputRef}
                />
              )}
            />
            <Text style={styles.label}>Email:</Text>
            {error && (
              <Text style={styles.errorText}>
                *Please enter a valid email address
              </Text>
            )}
            <Controller
              name="email"
              control={control}
              onFocus={() => {
                emailInputRef.current.focus();
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  testID="registerEmail"
                  placeholder={profileUser.email}
                  color="black"
                  style={styles.profileEmailInput}
                  onChangeText={(value) => {
                    props.onChange(value);
                  }}
                  ref={emailInputRef}
                />
              )}
            />
            <TouchableHighlight
              style={{ ...styles.registerOpenButton }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.textStyle} testID="registerSubmit">
                UPDATE
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    marginTop: 48,
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
  profileInfo: {
    padding: 10,
    fontSize: 16,
  },
  header: {
    fontSize: 16,
  },
  profileEmailInput: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  profileUsernameInput: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  label: {
    color: "black",
    margin: 10,
    marginHorizontal: 10,
    fontSize: 25,
    alignSelf: "flex-start",
  },
  registerOpenButton: {
    alignSelf: "center",
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 30,
    marginLeft: 20,
    width: "100%",
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
    paddingTop: 10,
    fontWeight: "bold"
  },
  errorText: {
    color: "red",
  },
  profileModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "50%",
    width: "80%",
    marginTop: "50%",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  profileBackground: {
    backgroundColor: "#38A3A5",
    height: "100%",
  },
  profileInfoView: {
    backgroundColor: "#E1E2E6",
    marginTop: "10%",
    width: "80%",
    alignSelf: "center",
    height: "30%",
    borderRadius: 5,
  },
  updateInfoButton: {
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 70,
    width: "70%",
    alignSelf: "center",
  },
});

export default Profile;
