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
} from "react-native";

// Components
import HeaderView from "../HeaderView/HeaderView";
import FilterModal from "../Modals/FilterModal";
import SearchNav from "../SearchNav/SearchNav";
import HamburgerModal from "../Modals/HamburgerModal";

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
  setUser,
  setDisplayFav,
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

  //this is the hook for setting the date on the filter modal
  const [filteredDate, setFilteredDate] = useState("");

  //this is the hook for the setting of the avatar image for the whole app
  const [avatar, setAvatar] = useState(user.image);

  //this is the hook for the setting of the add button icon on the profile image for the whole app
  const [addBtn, setAddBtn] = useState(() => {
    if (user.image) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <View style={styles.container}>
      <HeaderView
        setModalVisible={setModalVisible}
        setHamburgerVisible={setHamburgerVisible}
      />
      <SearchNav
        setSearchedMarkets={setSearchedMarkets}
        setLocation={setLocation}
        setMarketsNearMe={setMarketsNearMe}
        filteredProducts={filteredProducts}
        setDisplayFav={setDisplayFav}
      />
      <FilterModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setMarketsNearMe={setMarketsNearMe}
        location={location}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        setDisplayFav={setDisplayFav}
        setFilteredDate={setFilteredDate}
        filteredDate={filteredDate}
        products={products}
        setProducts={setProducts}
        defaultProducts={defaultProducts}
      />

      <HamburgerModal
        setMarketsNearMe={setMarketsNearMe}
        hamburgerVisible={hamburgerVisible}
        setHamburgerVisible={setHamburgerVisible}
        navigation={navigation}
        user={user}
        setUser={setUser}
        setDisplayFav={setDisplayFav}
        avatar={avatar}
        setAvatar={setAvatar}
        addBtn={addBtn}
        setAddBtn={setAddBtn}
      />
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "25%",
    marginTop: 20,
  },
});

export default Header;
