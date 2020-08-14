// // IMPORTS // //
// React && React-Native
import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";

// Vector-Icons
import { FontAwesome, Feather } from "@expo/vector-icons";

// HEADER COMPONENT
const HeaderView = ({ setModalVisible, setHamburgerVisible }) => {
  return (
    <View style={styles.mainNavContainer}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <FontAwesome
          testID="filterBtn"
          name="filter"
          size={50}
          color="black"
          style={styles.filterBtn}
        />
      </TouchableHighlight>
      <Image
        testID="bannerLogo"
        style={styles.bannerLogo}
        source={require("../../assets/FMM_banner_logo_final.png")}
      />
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          setHamburgerVisible(true);
        }}
      >
        <Feather name="menu" size={50} color="black" />
      </TouchableHighlight>
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  mainNavContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: (0, 20),
  },
  bannerLogo: {
    height: "75%",
    width: "70%",
  },
  filterBtn: {
    marginRight: 5,
  },
});

export default HeaderView;
