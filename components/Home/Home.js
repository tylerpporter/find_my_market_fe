// // IMPORTS // // 

// React && React-Native
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Map from "../Map/Map";
import Header from "../Header/Header";

// Expo
import * as Location from "expo-location";

// HOME COMPONENT
const Home = () => {

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
  const [searchedMarkets, setSearchedMarkets] = useState([]) 
  // this is for the filtering of products
  const [filteredProducts, setFilteredProducts] = useState([])
  // this is the default region for map
  const initialRegion = {
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

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
      getMarketsNearby(location);
    })();
  }, []);

  // Setting markets based off the hook:location
  const getMarketsNearby = (location) => {
    let url = "https://us-farmers-markets-api.herokuapp.com/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `query($lat: Float!, $lng: Float!, $radius: Int!, $products: [String!]){ marketsByCoords(lat: $lat, lng: $lng, radius: $radius, products: $products ) { 
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
      }`,
      variables: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        radius: 40,
        products: filteredProducts
      }
     }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('testing filter', data)
        setMarketsNearMe(data.data.marketsByCoords.markets);
        setFilteredProducts([])
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

// CSS: Styling
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Home;
