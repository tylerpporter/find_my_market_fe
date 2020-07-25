// // IMPORTS // //

// React && React-Native
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// MAP COMPONENT
const Map = ({
  marketsNearMe,
  location,
}) => {

  // This displays the markers based on current Region
  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude, id } = location;

    // let productsList = location.products.map((product) => {
    //   return <Text key={Math.random()}>{product.name}</Text>;
    // });

    return (
      <Marker
        key={id}
        id={id}
        coordinate={{ latitude: latitude, longitude: longitude }}
        pinColor="#F25C54"
      >
        <Callout style={{ width: 300, height: 300 }}>
          <View style={{margin: 5}}><Text>{location.marketname}</Text></View>
          <View style={{margin: 5}}><Text style={{ flexWrap: "wrap" }}>
            {location.street} {location.city}, {location.state} {location.zip}
          </Text></View>
          <View style={{margin: 5}}><Text>Distance Away: {Math.round(location.distance)} mile(s)</Text></View>
          <View style={{margin: 5}}><Text>Season Date: {location.season1date}</Text></View>
          <View style={{margin: 5}}><Text style={{ flexWrap: "wrap" }}>
            Season Time: {location.season1time}
          </Text></View>
          <View style={{margin: 5}}><Text>Website: {location.website}</Text></View>
            {/* {productsList} */}
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
    </MapView>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: "#05668D",
    backgroundColor: "#F7B267",
    height: 40,
    borderRadius: 4,
    paddingRight: 50,
    paddingLeft: 50,
  },
});

export default Map;
