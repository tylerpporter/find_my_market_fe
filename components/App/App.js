// // IMPORTS // //

// React && React-Native
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home/Home";
import Login from "../Login/Login";

//Hide warnings
console.disableYellowBox = true;

// Navigation
const Stack = createStackNavigator();

// APP COMPONENT
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }} 
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
