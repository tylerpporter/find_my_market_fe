// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";

// fetch call
import {
  displayFavoriteMarkets,
  displayFavoriteMarketsListView,
} from "../../apiCalls";

// Vector-Icons
import { AntDesign } from "@expo/vector-icons";

// HEADER COMPONENT
const HamburgerModal = ({
  setMarketsNearMe,
  hamburgerVisible,
  setHamburgerVisible,
  navigation,
  user,
  setUser,
  setDisplayFav,
  setAvatar,
  avatar,
  addBtn,
  setAddBtn
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={hamburgerVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.hamburgerCenteredView}>
        <View style={styles.hamburgerModalView}>
          <View style={styles.closeIcon}>
            <AntDesign
              name="close"
              size={30}
              color="black"
              onPress={() => {
                setHamburgerVisible(!hamburgerVisible);
              }}
            />
          </View>
          <Text style={styles.title}> MENU </Text>
          {/* This is the button to display user profile */}
          <TouchableHighlight
            style={{ ...styles.logOutButton }}
            onPress={async () => {
              let listMarketArray = await displayFavoriteMarketsListView(user);
              setHamburgerVisible(!hamburgerVisible);
              await navigation.navigate("Profile", {
                user,
                avatar,
                setAvatar,
                addBtn,
                setAddBtn,
                setUser,
                listMarketArray,
              });
            }}
          >
            <Text style={styles.textStyle}>PROFILE</Text>
          </TouchableHighlight>

          {/* This is the button to display user favorites */}
          <TouchableHighlight
            style={{ ...styles.logOutButton }}
            onPress={() => {
              displayFavoriteMarkets(setMarketsNearMe, user, setDisplayFav);
              setHamburgerVisible(!hamburgerVisible);
            }}
          >
            <Text style={styles.textStyle}>DISPLAY MY FAVORITES</Text>
          </TouchableHighlight>

          {/* This is the button to Log-Out */}
          <TouchableHighlight
            style={{ ...styles.logOutButton }}
            onPress={() => {
              setHamburgerVisible(!hamburgerVisible);
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.textStyle}>LOG OUT</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    marginTop: 20,
  },
  location: {
    alignSelf: "center",
    flexDirection: "column",
    fontSize: 15,
    padding: 20,
  },
  hamburgerCenteredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 32,
  },
  hamburgerModalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: 300,
    margin: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logOutButton: {
    backgroundColor: "#EF8275",
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    width: 150,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 35,
  },
});

export default HamburgerModal;
