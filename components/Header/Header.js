import React, { Component, useState } from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";
import MainNav from "../MainNav/MainNav";
import SearchNav from "../SearchNav/SearchNav";

const Header = () => {
  return (
    <View style={styles.container}>
      <MainNav />
      <Text style={styles.location}>CURRENT CITY</Text>
      <SearchNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    marginTop: 50,
  },
  location: {
    flexDirection: "column",
    alignSelf: "center",
    padding: 20,
    fontSize: 15,
  },
});

export default Header;
