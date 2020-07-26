// // IMPORTS // //
//React && React-Native
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

// LIST-ITEM COMPONENT
const ListItem = ({
  item,
  setFilteredProducts,
  filteredProducts,
  products,
}) => {

// // HOOKS // //
  // This is for the switch for true or false
  const [isEnabled, setIsEnabled] = useState(false);
  
// // METHODS // //
  // This toggles the true and false values of the switch 
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    filterOptions();
  };

  // This is where the filter options for products is set
  const filterOptions = () => {
    if (!isEnabled) {
      let selectedProduct = products.find(
        (product) => product.title === item.title
      );
      setFilteredProducts([...filteredProducts, selectedProduct.title]);
    } else {
      let deselectedProduct = filteredProducts.filter(
        (product) => product != item.title
      );
      setFilteredProducts([...deselectedProduct]);
    }
  };

  return (
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{item.title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#38A3A5" }}
        thumbColor={isEnabled ? "#EF8275" : "#38A3A5"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
        setFilteredProducts={setFilteredProducts}
      />
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 15,
  },
  listItemView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
    marginHorizontal: 30,
  },
});

export default ListItem;
