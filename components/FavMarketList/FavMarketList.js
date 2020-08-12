// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Row } from "native-base";

//FETCH CALL

const FavMarketList = ({favMarket}) => {
  return (
    <View style={styles.listViewContainer}>
      <View style={styles.distanceContainerLeft}>
        <Image
          source={require("../../assets/FMM_icon_no_border_favorites.png")}
          style={{ height: 50, width: 38, marginLeft: 15, marginTop: 10 }}
        />
      </View>
      <View style={styles.marketInfoContainer}>
        <Text>{favMarket.marketname}</Text>
        <Text style={styles.texts}>{favMarket.street} </Text>
        <Text style={styles.texts}>{favMarket.city}, {favMarket.state} {favMarket.zip} </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  listViewContainer: {
   height: 'auto',
   borderColor: "black",
   borderTopWidth: 2,
   borderBottomWidth: 2,
   marginTop: 5,
   flexDirection: 'row',
   justifyContent: "space-between"
  },
  distanceContainerLeft: {
    height: "100%",
    width: "15%",
    marginRight: 10,
  },

  marketInfoContainer: {
    width: "70%",
    height: "100%",
    padding: 10,
    alignSelf: "center"
  }
});

export default FavMarketList;
