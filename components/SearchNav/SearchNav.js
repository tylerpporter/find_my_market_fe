import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

const SearchNav = () => {
  const { control, handleSubmit, errors } = useForm();
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();
  const onSubmit = (data) => {
    //this is the data that will be posted to backend
    //make a post to GraphQL
    console.log({...data, country: "US"});
  };

  // console.log('errors', errors);

  return (
   
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>City</Text>
        <Controller
          name="city"
          control={control}
          rules={{ required: "This is required"}}
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
          rules={{ required: "This is required"}}
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
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









// import React, {Component} from "react";
// import {StyleSheet, View, SafeAreaView, TextInput} from "react-native";
// import {Ionicons} from "@expo/vector-icons";
// // import shortid from "shortid";
// import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete";
 
// class SearchNav extends Component {
//   handleSelectItem(item, index) {
//     const {onDropdownClose} = this.props;
//     onDropdownClose();
//     console.log(item);
//   }
 
//   render() {
//     const apiUrl = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
 
//     const {scrollToInput, onDropdownClose, onDropdownShow} = this.props;
 
//     return (
//       <View style={styles.autocompletesContainer}>
//         <SafeAreaView>
//             <Autocomplete
//               style={styles.input}
//               scrollToInput={ev => scrollToInput(ev)}
//               handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
//               onDropdownClose={() => onDropdownClose()}
//               onDropdownShow={() => onDropdownShow()}
//               fetchDataUrl={apiUrl}
//               minimumCharactersCount={2}
//               highlightText
//               valueExtractor={item => item.city}
//               rightContent
//               rightTextExtractor={item => item.state}
//             />
//         </SafeAreaView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   autocompletesContainer: {
//     paddingTop: 0,
//     zIndex: 1,
//     width: "100%",
//     paddingHorizontal: 8,
//   },
//   input: {maxHeight: 40},
//   inputContainer: {
//     display: "flex",
//     flexShrink: 0,
//     flexGrow: 0,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: "#c7c6c1",
//     paddingVertical: 13,
//     paddingLeft: 12,
//     paddingRight: "5%",
//     width: "100%",
//     justifyContent: "flex-start",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   plus: {
//     position: "absolute",
//     left: 15,
//     top: 10,
//   },
// });
 
// export default withKeyboardAwareScrollView(SearchNav);


// import React from "react";
// import { Text, View, TextInput, Button, Alert, StyleSheet, Picker } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import Constants from "expo-constants";

// const SearchNav = () => {
//   const { control, handleSubmit, errors } = useForm();
//   const cityInputRef = React.useRef();
//   const stateInputRef = React.useRef();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   console.log('errors', errors);

//   return (
   
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.label}>City</Text>
//         <Controller
//           name="city"
//           control={control}
//           rules={{ required: "This is required"}}
//           onFocus={() => {
//             cityInputRef.current.focus();
//           }}
//           render={(props) => (
//             <TextInput
//               {...props}
//               style={styles.input}
//               onChangeText={(value) => {
//                 props.onChange(value);
//               }}
//               ref={cityInputRef}
//             />
//           )}
//         />
//       </View>
      
//       <View>
//         <Text style={styles.label}>State</Text>
//         <Controller
//           name="state"
//           control={control}
//           rules={{ required: "This is required"}}
//           onFocus={() => {
//             stateInputRef.current.focus();
//           }}
//           render={(props) => (
//             <Picker
//               {...props}
//               style={styles.input}
//               onChangeText={(value) => {
//                 props.onChange(value);
//               }}
//               ref={stateInputRef}
//             />
//           )}
//         />
//       </View>
//       <View style={styles.button}>
//         <Button color="white" title="Submit" onPress={handleSubmit(onSubmit)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     color: "white",
//     margin: 10,
//     marginHorizontal: 10,
//   },
//   button: {
//     marginTop: 40,
//     color: "white",
//     backgroundColor: "#ec5990",
//     height: 40,
//     borderRadius: 4,
//   },
//   container: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: Constants.statusBarHeight,
//     padding: 8,
//     backgroundColor: "#0e101c",
//   },
//   input: {
//     backgroundColor: "white",
//     height: 40,
//     width: 130,
//     padding: 10,
//     borderRadius: 4,
//     marginHorizontal: 10,
//   },
// });

// export default SearchNav;









// import React, { useEffect, useState } from "react";
// import { Text, View, TextInput, Button, Alert, StyleSheet, FlatList, ListView } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import Constants from "expo-constants";

// const SearchNav = () => {
//   const { control, handleSubmit, errors } = useForm();
//   const locationInputRef = React.useRef();
//   const [cities, setCities ] = useState([]);
//   const [searchedLocation, setSearchedLocation ] = useState('');
  
//   const onSubmit = (event) => {
//     displayMatches(event)
//   };

//   // console.log('errors', errors);

//   // useEffect(() => {
//   //   const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    
//   //   fetch(endpoint).then(blob => blob.json())
//   //                 .then(data => setCities([...data]))
                  
//   // }) 

//   const findMatches = (wordToMatch, cities) => {
//     return cities.filter(place => {
//       // here we need to figure out if the city or state matches what was searched
//       const regex = new RegExp(wordToMatch, 'gi');
//       return place.city.match(regex) || place.state.match(regex)
//     });
//   }
  
//   const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   }
  
//   const displayMatches = (event) => {
//     const matchArray = findMatches(searchedLocation, cities);
//     return matchArray.map(place => {
//       const regex = new RegExp(searchedLocation, 'gi');
//       const cityName = place.city.replace(regex, <Text>{searchedLocation}</Text>)
//       const stateName = place.state.replace(regex, <Text>{searchedLocation}</Text>)
//       return (
//         <FlatList>
//           <Text>{cityName}, {stateName}</Text>
//           <Text>{numberWithCommas(place.population)}</Text>
//           </FlatList>
//       );
//     }).join('');
    
//     // suggestions.innerHTML = html;
//   }

  

//   return (
//     <View style={styles.container}>
//       <View>

//         <Text style={styles.label}>Enter your City, State</Text>
//         <Controller
//           name="location"
//           control={control}
//           rules={{ required: "This is required"}}
//           onFocus={() => {
//             locationInputRef.current.focus();
//           }}
//           render={(props) => (
//             <TextInput
//               {...props}
//               style={styles.input}
//               onChangeText={(value) => {
//                 console.log('value', value)
//                 props.onChange(() => setSearchedLocation(value));
//                 // console.log('searchedLocation', searchedLocation)
//               }}
//               ref={locationInputRef}
//             />
//             <ListView renderRow={}>

//             </ListView>
//           )}
//         />

//       </View>
      
//       <View style={styles.button}>
//         <Button color="white" title="Submit" onPress={handleSubmit(onSubmit)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     color: "white",
//     margin: 10,
//     marginHorizontal: 10,
//   },
//   button: {
//     marginTop: 40,
//     color: "white",
//     backgroundColor: "#ec5990",
//     height: 40,
//     borderRadius: 4,
//   },
//   container: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: Constants.statusBarHeight,
//     padding: 8,
//     backgroundColor: "#0e101c",
//   },
//   input: {
//     backgroundColor: "white",
//     height: 40,
//     width: 130,
//     padding: 10,
//     borderRadius: 4,
//     marginHorizontal: 10,
//   },
// });

// export default SearchNav;
