// // IMPORTS // //
// React && React-Native
import React from "react";
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

// MAP COMPONENT
const Map = ({ marketsNearMe, location }) => {
  // This displays the markers based on current Region
  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude, id } = location;

    return (
      <Marker
        key={`${Math.random()}`}
        id={id}
        coordinate={{ latitude: latitude, longitude: longitude }}
        pinColor="#F25C54"
      >
      <Image source={require('../../assets/FMM_icon_no_border.png')} style={{height: 50, width: 38 }} />
        <Callout style={styles.callOut}>
          <View style={styles.views}>
            <Text>{location.marketname}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.texts}>
              {location.street} {location.city}, {location.state} {location.zip}
            </Text>
          </View>
          <View style={styles.views}>
            <Text>Distance Away: {Math.round(location.distance)} mile(s)</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.texts}>
              Season Info: {location.seasonDates}
            </Text>
          </View>
          <CalloutSubview
            onPress={() => Linking.openURL(`${location.website}`)}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.views}>View Markets Website</Text>
            </TouchableOpacity>
          </CalloutSubview>
        </Callout>
      </Marker>
    );
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
    marginTop: 40,
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
});

export default Map;
