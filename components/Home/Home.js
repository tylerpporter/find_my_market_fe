import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Map from "../Map/Map";
import Header from "../Header/Header";
import * as Location from "expo-location";


const Home = () => {
  const initialRegion = {
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  // this sets the users location
  const [location, setLocation] = useState(initialRegion);
  // this is the markets based off the location above
  const [marketsNearMe, setMarketsNearMe] = useState([]);
  // ????
  const [errorMsg, setErrorMsg] = useState(null);
  // this is for the Modal with the drop-down//filter
  const [modalVisible, setModalVisible] = useState(false);
  // this is for the markets based off searchedCity
  const [searchedMarkets, setSearchedMarkets] = useState([]) 

//
  const [filteredProducts, setFilteredProducts] = useState([])

  // Setting my current location as a user and receiving markets near this location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      
      setLocation(location);
      getMarketsNearby(location);
    })();
  }, []);

  const getMarketsNearby = (location) => {
    console.log("LOCATION", location)
    let url = "https://us-farmers-markets-api.herokuapp.com/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{ marketsByCoords(lat: ${location.coords.latitude}, lng: ${location.coords.longitude}, radius: 40 ) { 
              location 
              markets {
              id 
              marketname
              latitude
              longitude
              website
              distance
              season1date
              season1time
              street
              city
              state
              zip
              products {
                  name
              }
              }
          }
      }`
     }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        setMarketsNearMe(data.data.marketsByCoords.markets);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



  return (
    <View style={styles.container}>
      <Header 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSearchedMarkets={setSearchedMarkets}
        setLocation={setLocation}
        setMarketsNearMe={setMarketsNearMe}
        getMarketsNearby={getMarketsNearby}
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

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Home;
