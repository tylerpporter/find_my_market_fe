// // IMPORTS // //
// React && React-Native
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const LoginView = ({ setRegister, setSignIn }) => {

  return (
      <View style={styles.logoWrapper}>
        <View style={styles.logoContainer}>
          <Image
            testID="logo"
            style={styles.logo}
            source={require("../../assets/FMM_logo_final.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Button
                testID="registerBtn"
                color="white"
                title="REGISTER"
                onPress={() => {
                  setRegister(true);
                }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.or}>-OR-</Text>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Button
                testID="signInBtn"
                color="white"
                title="SIGN IN"
                onPress={() => {
                  setSignIn(true);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "#ffffff",
    height: 40,
    marginTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  button2: {
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "#ffffff",
    height: 40,
    paddingLeft: 50,
    paddingRight: 50,
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 2,
    height: "20%",
    padding: 0,
    width: "100%",
  },
  or: {
    color: "black",
    fontSize: 30,
    margin: 10,
    marginHorizontal: 10,
  },
  logo: {
    height: "60%",
    width: "60%",
    paddingTop: "10%",
  },
  logoContainer: {
    alignItems: "center",
    flex: 3,
    height: "70%",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#EF8275",
    flex: 1,
    height: "100%",
    padding: 8,
    width: "100%",
  },
  logoWrapper: {
    height: "100%",
    width: "100%",
  }
});
export default LoginView;
