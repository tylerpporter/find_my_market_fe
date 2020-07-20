// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from '../Home/Home'

// export default App = () => {

//   const [ farmersMarketData, setFarmersMarketData ] = useState([ { "marketname": " Caledonia Farmers Market Association - Danville", "id": 1, latitude: 37.8025259, longitude: -122.4351421}]);
//   return (
//     <View>
//       <Home data={farmersMarketData} />
//     </View>
//   );
// }


import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Home/Home';
import Login from '../Login/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

     
      <Stack.Screen 
        name="Login" 
        component={Login}
        // options={{ headerShown: false }} 
        />

      <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
          options={{ headerShown: false }} 
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;