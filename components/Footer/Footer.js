import React from "react";
import { Feather } from '@expo/vector-icons'; 
import { StyleSheet, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Feather name="map" size={40} color="black" />
      <Feather name="list" size={40} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: "15%",
    padding: (20, 20, 40, 20)
  },
});

export default Footer;
