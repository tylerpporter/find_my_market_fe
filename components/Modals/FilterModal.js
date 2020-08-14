// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableHighlight,
  FlatList,
} from "react-native";

// fetch call
import {
  getMarketsNearby,
} from "../../apiCalls";

// Components
import ListItem from "../ListItem/ListItem";
import MyDatePicker from "../MyDatePicker/MyDatePicker";

// Vector-Icons
import { AntDesign } from "@expo/vector-icons";

// HEADER COMPONENT
const FilterModal = ({
  setModalVisible,
  modalVisible,
  setMarketsNearMe,
  location,
  filteredProducts,
  setFilteredProducts,
  setDisplayFav,
  setFilteredDate,
  filteredDate,
  products,
  setProducts,
  defaultProducts
}) => {
  return (
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
                setModalVisible(!modalVisible);
              }}
            />
          </View>
          <Text style={styles.modalText}>Filter By Products</Text>
          <View style={styles.datePickerContainer}>
            <MyDatePicker
              setFilteredDate={setFilteredDate}
              filteredDate={filteredDate}
            />
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
                filteredDate
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
              setFilteredDate("");
              getMarketsNearby(
                location,
                setMarketsNearMe,
                setFilteredProducts,
                setDisplayFav
              );
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Clear Current Filters</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    marginTop: 20,
  },
  centeredView: {
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
  openButton: {
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
  datePickerContainer: {
    height: "8%",
    width: 200,
    alignItems: "center",
  },
});

export default FilterModal;
