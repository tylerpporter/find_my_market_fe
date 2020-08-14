// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { useForm } from "react-hook-form";

// Components
import SignInModal from "../Modals/SignInModal"
import RegisterModal from "../Modals/RegisterModal"
import LoginView from "../LoginView/LoginView"

// AUTH
const Login = ({ navigation }) => {
  // // HOOKS // //
  // This is for form validation and storing Inputs
  const { control, handleSubmit, errors } = useForm();
  // This is for the Register Modal
  const [register, setRegister] = useState(false);
  // This is for the Register Modal
  const [signIn, setSignIn] = useState(false);

  return (
    <View style={styles.mainContainer}>

      <LoginView 
        setRegister={setRegister}
        setSignIn={setSignIn}
      />
      
      {/* This is the Register Modal */}
      <View style={styles.centeredView}>
      <RegisterModal 
        register={register}
        setRegister={setRegister}
        control={control}
        handleSubmit={handleSubmit}
        navigation={navigation}
        />
      </View>

      {/* This is the SignIn Modal */}
      <View style={styles.centeredView}>
        <SignInModal 
          control={control}
          handleSubmit={handleSubmit}
          navigation={navigation}
          setSignIn={setSignIn}
          signIn={signIn}
        />
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
  }
});
export default Login;
