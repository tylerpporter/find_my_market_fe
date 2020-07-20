import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Home from "../Home/Home";

const Login = ( {navigation }) => {
  return (
    <View>
      <Text>Find My Market</Text>
      <TouchableOpacity>
        <Button
          title="Log in"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
