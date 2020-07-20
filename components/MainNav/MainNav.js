import React, { Component, useState } from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";

const MainNav = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="filter" size={50} color="black" />
      <Text style={styles.title}>Find My Market</Text>
      <Feather name="menu" size={50} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: "15%",
    padding: (0, 20)
  },
  title: {
    fontSize: 30,
  }
});

export default MainNav;
