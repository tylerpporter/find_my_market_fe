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

  const nav = (user) => {
    navigation.navigate("Home", { user });
  };

  // This is for the submit of the LoginForm
  const onSubmit = (data) => {
    navigation.navigate("Home");
    // let url = "https://find-my-market-api.herokuapp.com/users/";

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({
    //     email: data.email,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     let user = { id: data.id, favorites: [] };
    //     // FOR AUTH
    //     // let user = {id: data.id, favorites: data.favorites, token: data.token}
    //     nav(user);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/FMM_logo_bottom_white.png")}
        />
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
              onPress={handleSubmit(onSubmit)}
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
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "#ffffff",
    height: 40,
    marginTop: 40,
    paddingLeft: 50,
    paddingRight: 50,
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 2,
    height: "30%",
    padding: 8,
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    width: 180,
  },
  label: {
    color: "black",
    fontSize: 30,
    margin: 10,
    marginHorizontal: 10,
  },
  logo: {
    height: "70%",
    margin: 0,
    width: "70%",
  },
  logoContainer: {
    alignItems: "center",
    flex: 3,
    height: "50%",
    justifyContent: "center",
    width: "100%",
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 1,
    height: "100%",
    padding: 8,
    width: "100%",
  },
  title: {
    color: "#05668D",
    fontSize: 50,
  },
});
export default Login;
