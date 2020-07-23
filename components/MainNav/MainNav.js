import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (0, 20)
  },
  title: {
    fontSize: 30,
  }
});

export default MainNav;
