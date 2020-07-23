import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Map = ({ marketsNearMe, location, searchedMarkets, searchedCity, region }) => {

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
        pinColor='#F25C54'
      >
        <Callout>
          <Text>{location.marketname}</Text>
          <Text>
            Address: {location.street} {location.city}, {location.state}{" "}
            {location.zip}
          </Text>
          <Text>Distance Away: {Math.round(location.distance)}</Text>
          <TouchableOpacity onPress={()=>{openUrl(location.website)}}>
            <Text>{location.website}</Text>
          </TouchableOpacity>
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
        pinColor='#F4845F'
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
