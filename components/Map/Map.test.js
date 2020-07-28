// import React from "react";
// import { render, waitFor, fireEvent } from "react-native-testing-library";
// import { data } from "../../sample-data";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { act } from "react-test-renderer";
// jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// import Map from "./Map";

// jest.mock("react-native-maps", () => {
//   const { View, TouchableOpacity, Callout, Marker} = require("react-native");
//   const onPressMock = jest.fn();
//   const MockMapView = (props) => {
//     return <View>{props.children}</View>;
//   };
//   const MockMarker = (props) => {
//     return (
//     <Marker>
//         {props.children}
//     </Marker>
//     );
//   };
//   return {
//     __esModule: true,
//     default: MockMapView,
//     Marker: MockMarker,
//   };
// });

// describe("Map", () => {

//     let sampleData;
//     let Stack;
//     let onPressMock;
  
//     beforeEach(() => {
//       sampleData = data;
//       Stack = createStackNavigator();
//       onPressMock = jest.fn();
//     });


//     test("Renders a map on the screen with 3 markers", async () => {
//         const mockLocation = {
//             coords: {
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             }
//           }
//         const map = () => <Map marketsNearMe={sampleData} location={mockLocation} />;
//         const { findAllByTestId } = render(
//           <NavigationContainer>
//             <Stack.Navigator>
//               <Stack.Screen name="Map" component={map} />
//             </Stack.Navigator>
//           </NavigationContainer>
//         );
    
//         const markers = await waitFor(() => findAllByTestId("marker"));
//         expect(markers).toHaveLength(3);
//     })
// })