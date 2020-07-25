import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const ListItem = ({
  item,
  setFilteredProducts,
  filteredProducts,
  products,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    filterOptions();
  };

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
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
        setFilteredProducts={setFilteredProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
