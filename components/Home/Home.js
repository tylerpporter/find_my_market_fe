import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../Map/Map";
import Header from "../Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Home;
