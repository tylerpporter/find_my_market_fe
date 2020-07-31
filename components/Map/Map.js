// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout, CalloutSubview } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

// Vector-Icons
import { AntDesign } from "@expo/vector-icons";
{
  /* <AntDesign name='heart' size={40} color='#80ED99' /> */
}

// COMPONENT
import Markers from '../Markers/Markers'
import FavMarkers from '../FavMarkers/FavMarkers'

// MAP COMPONENT
const Map = ({ marketsNearMe, location, user, setUser, favorites, setFavorites, displayFav }) => {
  // // METHODS // //

  // const checkFav = () => {
  //   marketsNearMe.forEach((market) => {
  //       user.favorites.forEach(fav => {
  //         if (market.fmid == fav["market_id"]) {
  //           setFavorites(true)
  //         } else {
  //           return
  //         }
  //       })
  //   });
  // };


  // This displays the markers based on current Region
  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude, fmid } = location;
    if (displayFav) {
      return (
        <FavMarkers latitude={latitude} longitude={longitude} fmid={fmid} location={location} favorites={favorites} setFavorites={setFavorites} />
      )
    } else {
      return (
        <Markers latitude={latitude} longitude={longitude} fmid={fmid} location={location} />
      )
    }
    
    });

  return (
    <MapView
      style={styles.mapView}
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
    alignItems: "center",
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "#05668D",
    height: 40,
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    width: "100%",
  },
  mapView: {
    height: "72%",
  },
  callOut: { width: 300, height: 300 },
  views: { margin: 5 },
  texts: { flexWrap: "wrap" },
  favButton: {
    alignItems: "center",
    height: 40,
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    width: "100%",
  },
});

export default Map;
