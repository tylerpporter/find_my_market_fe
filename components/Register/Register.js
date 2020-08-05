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
  Modal,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// // FETCH CALL
import { registerFetchCall } from "../../apiCalls";

const Register = ({
  control,
  handleSubmit,
  navigation,
  setRegister,
  register,
  setRegisterError,
  registerError
}) => {
  // // METHODS // //
  // This is for Controller
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const usernameInputRef = React.useRef();
  
  // FETCH CALL
  const onSubmit = async (data) => {
    let user = await registerFetchCall(data);
  
    if (user.detail) {
      setRegister(!register);
      setRegisterError(!registerError)
    } else {
      setRegister(!register);
      navigation.navigate("Home", { user });
    }
  };

  return (
    <View style={styles.centeredView}>
          <Text style={styles.label}>Username:</Text>
      <Controller
        name="username"
        control={control}
        rules={{ required: "This is required" }}
        onFocus={() => {
          usernameInputRef.current.focus();
        }}
        render={(props) => (
          <TextInput
            {...props}
            testID="registerUsername"
            placeholder="Please enter your username"
            color="black"
            style={styles.registerEmailInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={usernameInputRef}
          />
        )}
      />
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
            testID="registerEmail"
            placeholder="Please enter your email"
            color="black"
            style={styles.registerEmailInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={emailInputRef}
          />
        )}
      />

      <Text style={styles.label}>Password:</Text>
      <Controller
        name="password"
        control={control}
        rules={{ required: "This is required" }}
        onFocus={() => {
          passwordInputRef.current.focus();
        }}
        render={(props) => (
          <TextInput
            {...props}
            secureTextEntry={true}
            testID="registerPassword"
            placeholder="Please enter a password"
            color="black"
            style={styles.registerPasswordInput}
            onChangeText={(value) => {
              props.onChange(value);
            }}
            ref={passwordInputRef}
          />
        )}
      />

      <TouchableHighlight
        style={{ ...styles.registerOpenButton }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.textStyle} testID="registerSubmit">SUBMIT</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
  },
  registerEmailInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  registerNameInput: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  registerPasswordInput: {
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
  },
  registerOpenButton: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "black",
    height: 40,
    marginTop: 30,
    marginLeft: 20,
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
    paddingTop: 10,
  },
});

export default Register;
