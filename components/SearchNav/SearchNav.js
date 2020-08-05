// // IMPORTS // //
// React && React-Native
import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

//fetch calls
import { searchNavOnSubmit } from "../../apiCalls";

// IMPORT API KEY

import Constants from 'expo-constants';
// console.log(Constants.manifest.extra.google)


// AUTO COMPLETE FOR CITY AND STATE
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// SEARCH-NAV COMPONENT
const SearchNav = ({ setLocation, setMarketsNearMe, setDisplayFav }) => {
  // // HOOKS // //
  // This is for the form validation
  const { control, handleSubmit, errors } = useForm();

  // This is for Controller
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.label}>City</Text>
        <Controller
          name="city"
          control={control}
          rules={{ required: "This is required" }}
          onFocus={() => {
            cityInputRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              placeholder="Enter a city"
              style={styles.input}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={cityInputRef}
            />
          )}
        />
      </View>

      <View>
        <Text style={styles.label}>State</Text>
        <Controller
          name="state"
          control={control}
          rules={{ required: "This is required" }}
          onFocus={() => {
            stateInputRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              placeholder="Enter a state"
              style={styles.input}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={stateInputRef}
            />
          )}
        />
      </View> */}
      <GooglePlacesAutocomplete
          query={{
          key: Constants.manifest.extra.google,
          language: "en",
        }}
        placeholder='Enter Location'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />

      <View style={styles.button}>
        <Button
          color="white"
          title="Submit"
          onPress={handleSubmit((data) =>
            searchNavOnSubmit(
              data,
              setLocation,
              setMarketsNearMe,
              setDisplayFav
            )
          )}
        />
      </View>
    </View>
  );
};

// CSS: Styling
const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 40,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#38A3A5",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 40,
    marginHorizontal: 10,
    width: 130,
  },
});

export default SearchNav;
