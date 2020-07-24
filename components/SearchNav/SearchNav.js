import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const SearchNav = ({ setSearchedCity, setSearchedMarkets, setLocation, setMarketsNearMe }) => {
  const { control, handleSubmit, errors } = useForm();
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();

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
        setSearchedCity({coords: {latitude: data.data.marketsByCity.latitude, longitude:data.data.marketsByCity.longitude}})
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

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 10,
    marginHorizontal: 10,
  },
  button: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#ec5990",
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 130,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 10,
  },
});

export default SearchNav;
