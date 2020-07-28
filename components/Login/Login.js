// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

// Components
import Home from "../Home/Home";
import Register from "../Register/Register";

// -- ORIGINAL -- //
// LOGIN COMPONENT
// const Login = ({ navigation }) => {
// // // HOOKS // //
//   // This is for form validation and storing Inputs
//   const { control, handleSubmit, errors } = useForm();

// // // METHODS // //
//   // This is for Controller
//   const emailInputRef = React.useRef();

//   // This is for the submit of the LoginForm
//   const onSubmit = (data) => {
//     navigation.navigate("Home");

//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.logoContainer}>
//         <Image
//           testID="logo"
//           style={styles.logo}
//           source={require("../../assets/FMM_logo_bottom_white.png")}
//         />
//       </View>
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Email:</Text>
//         <Controller
//           name="email"
//           control={control}
//           rules={{ required: "This is required" }}
//           onFocus={() => {
//             emailInputRef.current.focus();
//           }}
//           render={(props) => (
//             <TextInput
//               {...props}
//               placeholder="Please enter your email"
//               color="black"
//               style={styles.input}
//               onChangeText={(value) => {
//                 props.onChange(value);
//               }}
//               ref={emailInputRef}
//             />
//           )}
//         />
//         <TouchableOpacity>
//           <View style={styles.button}>
//             <Button
//               color="white"
//               title="Log in"
//               onPress={handleSubmit(onSubmit)}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// AUTH
const Login = ({ navigation }) => {
  // // HOOKS // //
  // This is for form validation and storing Inputs
  const { control, handleSubmit, errors } = useForm();

  // This is for the Register Modal
  const [register, setRegister] = useState(false);

  // This is for the Register Modal
  const [signIn, setSignIn] = useState(false);

  // // METHODS // //

  // This is for the submit of the LoginForm
  // const registerFetch = (data) => {
  //   setRegister(!register);
  //   navigation.navigate("Home");
  // };

  const signInFetch = () => {
    setSignIn(!signIn);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.mainContainer}>
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

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={register}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.registerModalView}>
            <Register
              control={control}
              handleSubmit={handleSubmit}
              navigation={navigation}
              setRegister={setRegister}
              register={register}
            />
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={signIn}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.signInCenteredView}>
            <View style={styles.signInModalView}>
              {/* <SignIn control={control} /> */}

              <TouchableHighlight
                style={{ ...styles.signInOpenButton }}
                onPress={() => handleSubmit(signInFetch())}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
    paddingTop: "10%"
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
  },
  //here starts the register modal view's
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
    marginTop: "30%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38A3A5",
  },
});
export default Login;
