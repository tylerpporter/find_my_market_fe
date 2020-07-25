import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  Switch,
  FlatList,
} from "react-native";
import SearchNav from "../SearchNav/SearchNav";
import { FontAwesome, Feather } from "@expo/vector-icons";
import ListItem from "../ListItem/ListItem";


const Header = ({
  setModalVisible,
  modalVisible,
  setSearchedMarkets,
  setLocation,
  setMarketsNearMe,
  getMarketsNearby,
  location,
  filteredProducts,
  setFilteredProducts
}) => {

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "organic",
      value: false
    },
    {
      id: 2,
      title: "flowers",
      value: false
    },
    {
      id: 3,
      title: "meat",
      value: false
    },
    {
      id: 4,
      title: "poultry",
      value: false
    },
    {
      id: 5,
      title: "vegetables",
      value: false
    },
    {
      id: 6,
      title: "cheese",
      value: false
    },
    {
      id: 7,
      title: "honey",
      value: false
    },
    {
      id: 8,
      title: "jams",
      value: false
    },
    {
      id: 9,
      title: "juices",
      value: false
    },
    {
      id: 10,
      title: "coffee",
      value: false
    },
  ]);


  console.log('filteredproducts', filteredProducts)

  return (
    <View style={styles.container}>
      {/* <MainNav /> */}
      <View style={styles.mainNavContainer}>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <FontAwesome name="filter" size={50} color="black" />
        </TouchableHighlight>
        <Text style={styles.title}>Find My Market</Text>
        <Feather name="menu" size={50} color="black" />
      </View>

      <SearchNav
        setSearchedMarkets={setSearchedMarkets}
        setLocation={setLocation}
        setMarketsNearMe={setMarketsNearMe}
        filteredProducts={filteredProducts}
      />

      {/* MODAL WILL LIVE HERE */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <View style={styles.modalContainer}>
              <FlatList
                data={products}
                renderItem={({ item }) => <ListItem  products={products} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts} item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                getMarketsNearby(location)
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Filter By Products</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: (0, 20),
  },
  title: {
    fontSize: 30,
  },
  container: {
    height: "30%",
    marginTop: 20,
  },
  modalContainer: {
    height: "60%",
    marginTop: 20,
  },
  location: {
    flexDirection: "column",
    alignSelf: "center",
    padding: 20,
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Header;
