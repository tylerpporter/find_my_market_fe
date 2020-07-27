// // IMPORTS // //

// React && React-Native
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
} from "react-native";

// fetch call
import { getMarketsNearby } from "../../apiCalls";

// Components
import Map from "../Map/Map";
import Header from "../Header/Header";

// Expo
import * as Location from "expo-location";

// HOME COMPONENT
const Home = () => {
  //userData ====== props
  // console.log("HOME", user.route.params.user)

  // this is the default region for map
  const initialRegion = {
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  // // HOOKS // //
  // this sets the users location
  const [location, setLocation] = useState(initialRegion);
  // this is the markets based off the location above
  const [marketsNearMe, setMarketsNearMe] = useState([]);
  // ????
  const [errorMsg, setErrorMsg] = useState(null);
  // this is for the Modal with the drop-down//filter
  const [modalVisible, setModalVisible] = useState(false);
  // this is for the markets based off searchedCity
  const [searchedMarkets, setSearchedMarkets] = useState([]);
  // this is for the filtering of products
  const [filteredProducts, setFilteredProducts] = useState([]);
  //this is the loading hook for the welcome message
  const [isLoading, setIsLoading] = useState(true);

  // // METHODS // //
  // Setting my current location as a user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      // this is the fetch call
      getMarketsNearby(
        location,
        setMarketsNearMe,
        setFilteredProducts,
        filteredProducts
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isLoading}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Welcome to Find My Market!</Text>
              <Text style={styles.modalText}>Find markets 50 miles from you</Text>

              <TouchableHighlight
                style={{ ...styles.openButton}}
                onPress={() => {
                  setIsLoading(!isLoading);
                }}
              >
                <Text style={styles.textStyle}>Let's get started!</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>

      <Header
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSearchedMarkets={setSearchedMarkets}
        setLocation={setLocation}
        setMarketsNearMe={setMarketsNearMe}
        location={location}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Map
        marketsNearMe={marketsNearMe}
        location={location}
        searchedMarkets={searchedMarkets}
      />
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#EF8275",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
