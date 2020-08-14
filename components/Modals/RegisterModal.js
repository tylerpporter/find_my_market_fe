// // IMPORTS // //
// React && React-Native
import React from "react";
import { StyleSheet, View, Modal } from "react-native";

// Components
import Register from "../Register/Register";

// VECTOR ICONS
import { AntDesign } from "@expo/vector-icons";

// AUTH
const RegisterModal = ({
  navigation,
  register,
  setRegister,
  control,
  handleSubmit,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={register}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.registerModalView}>
        <View style={styles.closeIcon}>
          <AntDesign
            name="close"
            size={30}
            color="black"
            onPress={() => {
              setRegister(!register);
            }}
          />
        </View>
        <Register
          control={control}
          handleSubmit={handleSubmit}
          navigation={navigation}
          setRegister={setRegister}
          register={register}
        />
      </View>
    </Modal>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  registerModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "55%",
    width: "80%",
    marginTop: "50%",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
});
export default RegisterModal;
