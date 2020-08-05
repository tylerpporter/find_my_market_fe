// // IMPORTS // //
// React && React-Native
import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// // FETCH CALL
import { registerFetchCall } from "../../apiCalls";

//VECTOR ICONS
import {  AntDesign } from "@expo/vector-icons";

const SignInModal = ({ setSignInError, signInError }) => {
  return (
  <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={signInError}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.registerModalView}>
          <View style={styles.closeIcon}>
              <AntDesign
                name="close"
                size={30}
                color="black"
                onPress={() => {
                  setSignInError(!signInError);
                }}
              />
            </View>
              <Text>"Please enter a valid email address or password."</Text>
          </View>
        </Modal>
      </View>
  )
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "#ffffff",
    height: 40,
    marginTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  button2: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "#ffffff",
    height: 40,
    paddingLeft: 50,
    paddingRight: 50,
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 2,
    height: "20%",
    padding: 0,
    width: "100%",
  },
  or: {
    color: "black",
    fontSize: 30,
    margin: 10,
    marginHorizontal: 10,
  },
  logo: {
    height: "60%",
    width: "60%",
    paddingTop: "10%",
  },
  logoContainer: {
    alignItems: "center",
    flex: 3,
    height: "70%",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 1,
    height: "100%",
    padding: 8,
    width: "100%",
  },
  logoWrapper: {
    height: "100%",
    width: "100%",
  },
  //here starts the register modal view's
  registerModalView: {
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
    height: "55%",
    width: "80%",
    marginTop: "50%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38A3A5",
  },
  // SignIn Modal
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38A3A5",
  },
});

export default SignInModal