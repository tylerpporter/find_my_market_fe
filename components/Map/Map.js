import React, { Component, useState } from "react";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from "react-native-maps";

const Map = () => {
  const [coordinates, setCoordinates] = useState([
    { name: "1", latitude: 37.8025259, longitude: -122.4351421 },
    { name: "2", latitude: 37.7896386, longitude: -122.421646 },
    { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
    { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
    { name: "5", latitude: 37.7948605, longitude: -122.4596065 },
    { name: "6", latitude: 37.8025259, longitude: -122.4351431 },
  ]);

  const showWelcomeMessage = () => {
    Alert.alert("Welcome to San Francisco", "The food is amazing", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
      },
    ]);
  };

  return (
    <MapView
      style={{ height: '80%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      //  followsUserLocation
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polygon
        coordinates={coordinates}
        fillColor={"rgba(100, 200, 200, 0.3)"}
        strokeWidth={3}
      />
      <Circle
        center={{ latitude: 37.8025259, longitude: -122.4351421 }}
        radius={1000}
        fillColor={"rgba(300, 300, 200, 0.5)"}
      />
      <Marker
        draggable
        coordinate={{ latitude: 37.7825259, longitude: -122.44 }}
      >
        {/* // title={'San Francisco'}> */}
        <Callout onPress={showWelcomeMessage}>
          {/* <Image source={require('./assets/sushi.png')}/> */}
          <Text>An Interesting City</Text>
        </Callout>

        {/* <Image source={require("./assets/sushi.png")} /> */}
      </Marker>

      {coordinates.map((marker) => {
        <Marker
          key={marker.name}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.name}
        >
          <Callout>
            <Image
              styles={{ width: 50, height: 50 }}
            //   source={require("./assets/sushi.png")}
            />
            <Text>{marker.name}</Text>
          </Callout>
        </Marker>;
      })}
    </MapView>
  );
};

export default Map