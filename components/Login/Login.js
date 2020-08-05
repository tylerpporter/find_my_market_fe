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

// Components
import RegisterModal from '../Modals/RegisterModal'
import SignInModal from '../Modals/SignInModal'
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";

// VECTOR ICONS
import {  AntDesign } from "@expo/vector-icons";

// AUTH
const Login = ({ navigation }) => {
  // // HOOKS // //
  // This is for form validation and storing Inputs
  const { control, handleSubmit, errors } = useForm();

  // This is for the Register Modal
  const [register, setRegister] = useState(false);

  // This is for the Register Modal
  const [signIn, setSignIn] = useState(false);

  // This is for the RegisterModalError
  const [registerError, setRegisterError] = useState(false)

  // This is for the RegisterModalError
  const [signInError, setSignInError] = useState(false)


  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoWrapper}>
        <View style={styles.logoContainer}>
          <Image
            testID="logo"
            style={styles.logo}
            source={require("../../assets/FMM_logo_final.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Button
                testID="registerBtn"
                color="white"
                title="REGISTER"
                onPress={() => {
                  setRegister(true);
                }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.or}>-OR-</Text>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Button
                testID="signInBtn"
                color="white"
                title="SIGN IN"
                onPress={() => {
                  setSignIn(true);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={register}
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
                  setRegister(!register);
                }}
              />
            </View>

            <Register
              control={control}
              handleSubmit={handleSubmit}
              navigation={navigation}
              setRegister={setRegister}
              register={register}
              setRegisterError={setRegisterError}
              registerError={registerError}
            />
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
      {registerError && <RegisterModal registerError={registerError} setRegisterError={setRegisterError} />}
      </View>
      <View style={styles.centeredView}>
      {signInError && <SignInModal signInError={signInError} setSignInError={setSignInError} />}
      </View>

      <View style={styles.centeredView}>
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
              setSignInError={setSignInError}
              signInError={signInError}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

// CSS: Styling
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
export default Login;
