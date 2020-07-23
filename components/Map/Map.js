import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";

const Map = ({ marketsNearMe, location, searchedMarkets, searchedCity }) => {
  
  const [hasSearched, setHasSearched] = useState(false)


  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude, id } = location;

    let productsList = location.products.map((product) => {
      return <Text key={Math.random()}>{product.name}</Text>;
    });

    return (
      <Marker
        key={id}
        id={id}
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

  const searchedMarkers = searchedMarkets.map((location) => {
    let { latitude, longitude, id } = location;

    let productsList = location.products.map((product) => {
      return <Text key={Math.random()}>{product.name}</Text>;
    });

    return (
      <Marker
        key={id}
        id={id}
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
      region={location.coords}
    >
      {markers}
      {searchedMarkets && searchedMarkers}
    </MapView>
  );
};

export default Map;
