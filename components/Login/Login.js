// // IMPORTS // //

// React && React-Native
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// Components
import Home from "../Home/Home";

// LOGIN COMPONENT
const Login = ({ navigation }) => {

// // HOOKS // //

  // This is for form validation and storing Inputs
  const { control, handleSubmit, errors } = useForm();
  

// // METHODS // //

  // This is for Controller
  const emailInputRef = React.useRef();

  // This is for the submit of the LoginForm
  const onSubmit = (data) => {
    console.log("fetch login");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../../assets/FMM-logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <Controller
          name="email"
          control={control}
          rules={{ required: "This is required" }}
          onFocus={() => {
            emailInputRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              color="black"
              style={styles.input}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={emailInputRef}
            />
          )}
        />
        <TouchableOpacity>
          <View style={styles.button}>
            <Button
              color="white"
              title="Log in"
              onPress={() => {
                handleSubmit(onSubmit);
                navigation.navigate("Home");
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: "#ffffff",
    backgroundColor: "#38A3A5",
    height: 40,
    borderRadius: 4,
    paddingRight: 50,
    paddingLeft: 50,
  },
  formContainer: {
    flex: 2,
    width: "100%",
    height: "30%",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#EF8275",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 180,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  label: {
    color: "black",
    margin: 10,
    marginHorizontal: 10,
    fontSize: 30,
  },
  logo: {
    height: "70%",
    width: "70%",
    margin: 0,
  },
  logoContainer: {
    flex: 3,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#EF8275",
  },
  title: {
    fontSize: 50,
    color: "#05668D",
  },
});
export default Login;
