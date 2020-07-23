import React from "react";
import { StyleSheet, Text, View, Modal, Alert, TouchableHighlight } from "react-native";
import SearchNav from "../SearchNav/SearchNav";
import { FontAwesome, Feather } from "@expo/vector-icons";

const Header = ({ currentLocation, setModalVisible, modalVisible, setSearchedCity, setSearchedMarkets }) => {

  return (
    <View style={styles.container}>
      {/* <MainNav /> */}
      <View style={styles.mainNavContainer}>
        <TouchableHighlight onPress={() => {setModalVisible(true)}}>
          <FontAwesome name="filter" size={50} color="black" />
        </TouchableHighlight>
        <Text style={styles.title}>Find My Market</Text>
        <Feather name="menu" size={50} color="black" />
      </View>

      <Text style={styles.location}>{currentLocation}</Text>

      <SearchNav 
        setSearchedCity={setSearchedCity}
        setSearchedMarkets={setSearchedMarkets}
        />


      {/* MODAL WILL LIVE HERE */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (0, 20)
  },
  title: {
    fontSize: 30,
  },
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Header;
