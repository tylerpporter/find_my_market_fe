// // IMPORTS // //

// React && React-Native
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

//Hide warnings
console.disableYellowBox = true;

// Navigation
const Stack = createStackNavigator();

// APP COMPONENT
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true }}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
