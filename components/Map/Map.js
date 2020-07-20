import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

const Map = () => {
  

  const initialRegion = {
    coords: {
      // latitude: 39.7452,
      // longitude: -104.9922,
      // latitudeDelta: 0.5,
      // longitudeDelta: 0.5,
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
      console.log('location', location)
      // getMarketsNearby()
      // console.log('location', location)
    })();
  }, []);

  useEffect(() => {
    getMarketsNearby(location)
  }, [])

  // console.log('latitude', location.coordinates.latitude)

  const getMarketsNearby = (location) => {

    let url = "https://us-farmers-markets-api.herokuapp.com/"

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({ query: `{ marketsByLocation(lat: ${location.coords.latitude}, lng: ${location.coords.longitude}, radius: 50) { marketname distance latitude longitude } }` }),
    })
    .then(response => response.json())
    .then(data => {
      setMarketsNearMe(data.data.marketsByLocation)
      
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  // console.log('POOOP:', marketsNearMe);

  const handleRegionChange = (region) => {
    console.log('region', region)
    let newLocation = {coords: region}
    if (newLocation != location) {
      getMarketsNearby(newLocation)
    }
    setLocation({coords: region});
    // console.log('new location', location)
  };

  const markers = marketsNearMe.map((location) => {
    let { latitude, longitude } = location;

    return (
      <Marker
        key={Math.random()}
        coordinate={{ latitude: latitude, longitude: longitude }}
        // image={require("../../assets/images/tent-location-icon.png")}
        // onSelect={(e) => matchCampsiteData(e)}
      />
    );
  });

  return (
    // <View testID="map-container" style={styles.container}>
      <MapView
        // onMarkerDeselect={() => setSelectedCampsite(null)}
        style={{ height: '55%' }}
        // provider={PROVIDER_GOOGLE}
        region={location.coords}
        showsScale={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
        onRegionChangeComplete={(region) => handleRegionChange(region)}
      >
        {markers}
      </MapView>
      // {/* {selectedCampsite && <QuickView campsite={selectedCampsite} />} */}
      // {errorMsg && <Text>{errorMsg}</Text>}
    // {/* // </View> */}
  );
};

export default Map;