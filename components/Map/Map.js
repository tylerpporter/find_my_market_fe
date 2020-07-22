import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import * as Location from "expo-location";

const Map = () => {
  const initialRegion = {
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  const [location, setLocation] = useState(initialRegion);
  const [errorMsg, setErrorMsg] = useState(null);
  const [marketsNearMe, setMarketsNearMe] = useState([]);

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
    let url = "https://us-farmers-markets-api.herokuapp.com/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{ marketsByLocation(lat: ${location.coords.latitude}, lng: ${location.coords.longitude}, radius: 50) { marketname distance latitude longitude website season1date season1time street city state zip products { name } } }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMarketsNearMe(data.data.marketsByLocation);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude } = location;

    let productsList = location.products.map((product) => {
      return <Text key={Math.random()}>{product.name}</Text>;
    });

    return (
      <Marker
        key={Math.random()}
        coordinate={{ latitude: latitude, longitude: longitude }}
      >
        <Callout>
          <Text>{location.marketname}</Text>
          <Text>
            Address: {location.street} {location.city}, {location.state}{" "}
            {location.zip}
          </Text>
          <Text>Distance Away: {Math.round(location.distance)}</Text>
          <Text>Website: {location.website}</Text>
          {productsList}
        </Callout>
      </Marker>
    );
  });

  return (
    <MapView 
      style={{ height: "68%" }} 
      showsUserLocation={true}
    >
      {markers}
    </MapView>
  );
};

export default Map;
