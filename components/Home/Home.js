import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {



  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <Footer />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
  });

export default Home;


