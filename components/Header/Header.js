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
    backgroundColor: "blue",
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: "40%",
  },
  location: {
      flexDirection: 'column',
  }
});

export default Header;
