import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Home from "../Home/Home";

const Login = ( {navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const emailInputRef = React.useRef();

  const onSubmit = (data) => {
    // here will be the fetch for login
    console.log('fetch login')
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.logo}>LOGO HERE</Text>
      <Text style={styles.title}>Find My Market</Text>
      
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
            style={styles.button}
            title="Log in"
            onPress={() => {
              handleSubmit(onSubmit)
              navigation.navigate("Home");
            }}
          />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: "#05668D",
    backgroundColor: "#F7B267",
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
    marginTop: 50,
    backgroundColor: "#F27059",
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
    color: "#05668D",
    margin: 10,
    marginHorizontal: 10,
    fontSize: 30,

  },
  logo: {
    color: "#05668D",
    margin: 200,
    marginHorizontal: 10,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "70%",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#F27059",
  },
  title: {
    fontSize: 50,
    color: "#05668D",
  },
});
export default Login;
