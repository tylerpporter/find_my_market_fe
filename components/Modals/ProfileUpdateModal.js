// // IMPORTS // //
// React && React-Native
import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TextInput,
  TouchableHighlight,

} from "react-native";
import { useForm, Controller } from "react-hook-form";

// FETCH CALLS
import { updateProfile } from "../../apiCalls";

// VECTOR ICONS
import { AntDesign } from "@expo/vector-icons";

const ProfileUpdateModal = (props) => {
  console.log('zzzzzzzzzzzzzzzz', props)

    //This is the hook for the error handling message
    const [error, setError] = useState(false);
    // This is for form validation and storing Inputs
    const { control, handleSubmit, errors } = useForm();

    const [username, setUserName] = useState(props.profileUser.username)
    const [email, setEmail] = useState(props.profileUser.email)

    // This is for Controller
    const usernameInputRef = React.useRef();
    const emailInputRef = React.useRef();

    // FETCH CALL
  const onSubmit = async (data) => {
    let setUser = props.props.route.params.setUser;

    let { username, email } = data;

    let updatedUser = await updateProfile(
      username,
      email,
      props.profileUser,
      setUser
    );
    props.setProfileUser(updatedUser);
    props.setModalVisible(!props.modalVisible);
    setUserName(updatedUser.username)
    setEmail(updatedUser.email)
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
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
              props.setModalVisible(!props.modalVisible);
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
              placeholder={username}
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
              placeholder={email}
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
  profileInfo: {
    padding: 6,
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
    fontWeight: "bold",
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
  favoritesHeader: {
    alignSelf: "center",
    marginTop: 0,
    padding: 0,
    fontSize: 18,
    fontWeight: "800",
  },
  listViewContainer: {
    backgroundColor: "#E1E2E6",
    width: "80%",
    alignSelf: "center",
    height: 400,
    borderRadius: 5,
  },
  listViewContainerError: {
    backgroundColor: "#E1E2E6",
    width: "80%",
    alignSelf: "center",
    height: 70,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default ProfileUpdateModal;
