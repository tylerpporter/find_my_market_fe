// //IMPORTS // // 

// React && React-Native
import React from "react";
import { StyleSheet, View } from "react-native";

// Vector-Icons
import { Feather } from '@expo/vector-icons'; 

// FOOTER COMPONENT
const Footer = () => {
  return (
    <View style={styles.container}>
      <Feather name="map" size={40} color="black" />
      <Feather name="list" size={40} color="black" />
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: "15%",
    padding: (20, 20, 40, 20)
  },
});

export default Footer;
