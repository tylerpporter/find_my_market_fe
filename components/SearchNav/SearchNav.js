import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const SearchNav = () => {
  const { control, handleSubmit, errors } = useForm();
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();
  const onSubmit = (data) => {
    //this is the data that will be posted to backend
    //make a post to GraphQL
    console.log({ ...data, country: "US" });
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
