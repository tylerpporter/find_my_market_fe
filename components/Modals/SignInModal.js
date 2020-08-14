// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  StyleSheet,
  View,
  Modal,
} from "react-native";

// Components
import SignIn from "../SignIn/SignIn";

// VECTOR ICONS
import { AntDesign } from "@expo/vector-icons";

const SignInModal = ({ navigation, signIn, setSignIn, control, handleSubmit }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={signIn}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.signInModalView}>
        <View style={styles.closeIcon}>
          <AntDesign
            name="close"
            size={30}
            color="black"
            onPress={() => {
              setSignIn(!signIn);
            }}
          />
        </View>
        <SignIn
          control={control}
          handleSubmit={handleSubmit}
          navigation={navigation}
          signIn={signIn}
          setSignIn={setSignIn}
        />
      </View>
    </Modal>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  signInModalView: {
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
    height: "45%",
    width: "80%",
    marginTop: "50%",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
});
export default SignInModal;
