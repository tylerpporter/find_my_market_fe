// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  FlatList,
  Image,
} from "react-native";

// fetch call
import { getMarketsNearby, displayFavoriteMarkets } from "../../apiCalls";

// Components
import SearchNav from "../SearchNav/SearchNav";
import ListItem from "../ListItem/ListItem";
import MyDatePicker from '../MyDatePicker/MyDatePicker';

// Vector-Icons
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

// HEADER COMPONENT
const Header = ({
  setModalVisible,
  modalVisible,
  setSearchedMarkets,
  setLocation,
  setMarketsNearMe,
  location,
  filteredProducts,
  setFilteredProducts,
  hamburgerVisible,
  setHamburgerVisible,
  navigation,
  user,
  setDisplayFav,
  favorites,
  setFavorites,
}) => {

  // // HOOKS // //
  // This is a list of products to filter by
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "organic",
      isFiltered: false,
    },
    {
      id: 2,
      title: "flowers",
      isFiltered: false,
    },
    {
      id: 3,
      title: "meat",
      isFiltered: false,
    },
    {
      id: 4,
      title: "poultry",
      isFiltered: false,
    },
    {
      id: 5,
      title: "vegetables",
      isFiltered: false,
    },
    {
      id: 6,
      title: "cheese",
      isFiltered: false,
    },
    {
      id: 7,
      title: "honey",
      isFiltered: false,
    },
    {
      id: 8,
      title: "jams",
      isFiltered: false,
    },
    {
      id: 9,
      title: "juices",
      isFiltered: false,
    },
    {
      id: 10,
      title: "coffee",
      isFiltered: false,
    },
  ]);
  const defaultProducts = [
    {
      id: 1,
      title: "organic",
      isFiltered: false,
    },
    {
      id: 2,
      title: "flowers",
      isFiltered: false,
    },
    {
      id: 3,
      title: "meat",
      isFiltered: false,
    },
    {
      id: 4,
      title: "poultry",
      isFiltered: false,
    },
    {
      id: 5,
      title: "vegetables",
      isFiltered: false,
    },
    {
      id: 6,
      title: "cheese",
      isFiltered: false,
    },
    {
      id: 7,
      title: "honey",
      isFiltered: false,
    },
    {
      id: 8,
      title: "jams",
      isFiltered: false,
    },
    {
      id: 9,
      title: "juices",
      isFiltered: false,
    },
    {
      id: 10,
      title: "coffee",
      isFiltered: false,
    },
  ];

  const [filteredDate, setFilteredDate] = useState('')

  return (
    <View style={styles.container}>
      {/* <MainNav /> */}
      <View style={styles.mainNavContainer}>
        <TouchableHighlight
          underlayColor="white"
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <FontAwesome
            testID="filterBtn"
            name="filter"
            size={50}
            color="black"
            style={styles.filterBtn}
          />
        </TouchableHighlight>
        <Image
          testID="bannerLogo"
          style={styles.bannerLogo}
          source={require("../../assets/FMM_banner_logo_final.png")}
        />
        <TouchableHighlight
          underlayColor="white"
          onPress={() => {
            setHamburgerVisible(true);
          }}
        >
          <Feather name="menu" size={50} color="black" />
        </TouchableHighlight>
      </View>
      <SearchNav
        setSearchedMarkets={setSearchedMarkets}
        setLocation={setLocation}
        setMarketsNearMe={setMarketsNearMe}
        filteredProducts={filteredProducts}
        setDisplayFav={setDisplayFav}
      />
      {/* MODAL for filter WILL LIVE HERE */}
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
            <View style={styles.closeIcon}>
              <AntDesign
                name="close"
                size={30}
                color="black"
                onPress={() => {
                  setFilteredProducts([]);
                  setProducts(defaultProducts);
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <Text style={styles.modalText}>Filter By Products</Text>
            <View style={{height: "20%"}}>
            <MyDatePicker />
            </View>
            <View style={styles.modalContainer}>
              <FlatList
                data={products}
                renderItem={({ item }) => (
                  <ListItem
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                    filteredProducts={filteredProducts}
                    item={item}
                    setProducts={setProducts}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#EF8275" }}
              onPress={() => {
                getMarketsNearby(
                  location,
                  setMarketsNearMe,
                  setFilteredProducts,
                  filteredProducts,
                  setDisplayFav,
                );
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Submit Filter</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#EF8275" }}
              onPress={() => {
                setProducts(defaultProducts);
                getMarketsNearby(
                  location,
                  setMarketsNearMe,
                  setFilteredProducts,
                  setDisplayFav,
                );
                // setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Clear Current Filters</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* Modal for hamburger menu will live here */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={hamburgerVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.hamburgerCenteredView}>
          <View style={styles.hamburgerModalView}>
            <View style={styles.closeIcon}>
              <AntDesign
                name="close"
                size={30}
                color="black"
                onPress={() => {
                  setHamburgerVisible(!hamburgerVisible);
                }}
              />
            </View>
            <Text style={styles.title}> MENU </Text>
            {/* This is the button to Log-Out */}
            <TouchableHighlight
              style={{ ...styles.logOutButton }}
              onPress={() => {
                setHamburgerVisible(!hamburgerVisible);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.textStyle}>LOG OUT!</Text>
            </TouchableHighlight>

            {/* This is the button to display user favorites */}
            <TouchableHighlight
              style={{ ...styles.logOutButton }}
              onPress={() => {
                displayFavoriteMarkets(
                  setMarketsNearMe,
                  user,
                  setFavorites,
                  setDisplayFav,
                );
                setHamburgerVisible(!hamburgerVisible);
              }}
            >
              <Text style={styles.textStyle}>Display MY favorites</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  mainNavContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: (0, 20),
  },
  bannerLogo: {
    height: "75%",
    width: "70%",
  },
  container: {
    backgroundColor: "white",
    height: "25%",
    marginTop: 20,
  },
  modalContainer: {
    height: "60%",
    marginTop: 20,
  },
  location: {
    alignSelf: "center",
    flexDirection: "column",
    fontSize: 15,
    padding: 20,
  },
  centeredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 32,
  },
  hamburgerCenteredView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 32,
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: 700,
    margin: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  hamburgerModalView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: 250,
    margin: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  openButton: {
    backgroundColor: "#EF8275",
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    width: 150,
  },
  logOutButton: {
    backgroundColor: "#EF8275",
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    padding: 10,
    width: 150,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  filterBtn: {
    marginRight: 5,
  },
  title: {
    fontSize: 35,
  }
});

export default Header;
