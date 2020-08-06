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
import Markers from "../Markers/Markers";
import FavMarkers from "../FavMarkers/FavMarkers";

// MAP COMPONENT
const Map = ({
  marketsNearMe,
  location,
  user,
  setUser,
  displayFav,
  favorites,
  setFavorites,
}) => {
  // // METHODS // //
  // This displays the markers based on current Region
  // const markers = marketsNearMe.map((location) => {
  //   let { latitude, longitude, fmid } = location;
  //   if (displayFav) {
  //     return (
  //       <FavMarkers
  //         latitude={latitude}
  //         longitude={longitude}
  //         fmid={fmid}
  //         location={location}
  //         user={user}
  //         setUser={setUser}
  //         favorites={favorites}
  //         setFavorites={setFavorites}
  //       />
  //     )
  //   } else {
  //     return (
  //       <Markers
  //       latitude={latitude}
  //       longitude={longitude}
  //       fmid={fmid}
  //       location={location}
  //       user={user}
  //       setUser={setUser}
  //     />
  //     )
  //   }
  //   });
  const [userFavFmid, setUserFavFmid] = useState(
    user.favorites.map((fav) => fav["market_id"])
  );

  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude, fmid } = location;

    if (userFavFmid.includes(fmid)) {
      return (
        <FavMarkers
          key={fmid}
          latitude={latitude}
          longitude={longitude}
          fmid={fmid}
          location={location}
          user={user}
          setUser={setUser}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      );
    } else {
      return (
        <Markers
          key={fmid}
          latitude={latitude}
          longitude={longitude}
          fmid={fmid}
          location={location}
          user={user}
          setUser={setUser}
        />
      );
    }
  });

  const favMarkers = marketsNearMe.map((location) => {
    let { latitude, longitude, fmid } = location;
    if (displayFav) {
      return (
        <FavMarkers
          latitude={latitude}
          longitude={longitude}
          fmid={fmid}
          location={location}
          user={user}
          setUser={setUser}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      );
    }
  });

  return (
    <MapView
      style={styles.mapView}
      showsUserLocation={true}
      region={location.coords}
    >
      {displayFav ? favMarkers : markers}
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
