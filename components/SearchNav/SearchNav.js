// // IMPORTS // //

// React && React-Native
import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

// SEARCH-NAV COMPONENT
const SearchNav = ({ setSearchedMarkets, setLocation, setMarketsNearMe, filteredProducts}) => {

// // HOOKS // //

  // This is for the form validation
  const { control, handleSubmit, errors } = useForm();

  // This is for Controller
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();

// // METHODS // // 

  // This is the submit fetch call for searching a City&State
  const onSubmit = (data) => {
    let url = "https://us-farmers-markets-api.herokuapp.com/"; 

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
             query: `query($city: String!, $state: String!){ marketsByCity(city: $city, state: $state, radius: 50) {
              latitude 
              longitude
              markets {
                marketname
                latitude
                longitude
                website
                distance
                season1date
                season1time
                street
                city
                state
                zip
                id 
                products { name }
            }
          }
          }`,
          variables: {
            city: data.city, 
            state: data.state
          }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        setLocation({coords: {latitude: data.data.marketsByCity.latitude, longitude:data.data.marketsByCity.longitude}})
        // setSearchedMarkets(data.data.marketsByCity.markets)
        setMarketsNearMe(data.data.marketsByCity.markets)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
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
              style={styles.input}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={stateInputRef}
            />
          )}
        />
      </View>
      <View style={styles.button}>
        <Button color="white" title="Submit" onPress={handleSubmit(onSubmit)} />
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
    marginTop: 40,
    color: "white",
    backgroundColor: "#EF8275",
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38A3A5",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 130,
    borderRadius: 4,
    marginHorizontal: 10,
  },
});

export default SearchNav;
