// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
} from "react-native";

// HOME COMPONENT
const WelcomeModal = ({ isLoading, setIsLoading }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isLoading}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Welcome to Find My Market!</Text>
          <Text style={styles.modalText}>
            Find markets within 50 miles of you
          </Text>

          <TouchableHighlight
            style={{ ...styles.openButton }}
            onPress={() => {
              setIsLoading(!isLoading);
            }}
          >
            <Text style={styles.textStyle}>Let's get started!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

// CSS: Styling
const styles = StyleSheet.create({

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
    backgroundColor: "#EF8275",
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

export default WelcomeModal;
