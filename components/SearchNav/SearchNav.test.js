import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { Button, Text, TextInput, View } from "react-native";
import SearchNav from "./SearchNav";
import { searchNavOnSubmit } from "../../apiCalls";
import { act } from "react-test-renderer";

jest.mock("../../apiCalls");

const mockData = {
  marketsByCity: {
    latitude: 32.7762719,
    longitude: -96.7968559,
    markets: [
      {
        city: "Dallas",
        distance: 0.44487885632345103,
        fmid: 1012749,
        latitude: 32.777649,
        longitude: -96.789375,
        marketname: "Dallas Farmers Market",
        products: [
          {
            name: "organic",
          },
          {
            name: "bakedgoods",
          },
          {
            name: "cheese",
          },
          {
            name: "crafts",
          },
        ],
        season1date: "01/01/2016 to ",
        season1time: "Fri: 10:00 AM-5:00 PM;Sat: 8:00 AM-5:00 PM;Sun: 10:00 AM-5:00 PM;",
        state: "Texas",
        street: "920 S. Harwood Rd.",
        website: "http://www.dallasfarmersmarket.org",
        zip: "75201",
      },
    ],
  },
};




describe("SearchNav", () => {
  test("renders a SearchNav component upon logging in", async () => {
    const { getByText } = render(<SearchNav />);

    const city = await waitFor(() => getByText("City"));
    const state = await waitFor(() => getByText("State"));
    const submit = await waitFor(() => getByText("Submit"));

    expect(city).toBeTruthy();
    expect(state).toBeTruthy();
    expect(submit).toBeTruthy();
  });

  test("user can fill out the form in the SearchNav to search for a new city and state", () => {
    searchNavOnSubmit.mockResolvedValue(mockData);
    const { getByPlaceholder, getByText, queryByTestId, getByTestId } = render(<SearchNav />);

    // const cityInput = getByPlaceholder("Enter a city");
    // const stateInput = getByPlaceholder("Enter a state");
    const submit = getByText("Submit");

    act(() => {
      fireEvent(getByPlaceholder("Enter a city"), 'onChange', {nativeEvent: {text: 'Dallas'}})
      fireEvent(getByPlaceholder("Enter a state"), 'onSubmit')
      fireEvent(getByText("Submit"), 'onChange', {nativeEvent: {text: 'Dallas'}})
      // fireEvent.changeText(cityInput, "Dallas");
      // fireEvent.changeText(stateInput, "Texas");
      // fireEvent.press(submit);
    })

    expect(searchNavOnSubmit).toBeCalled();
  });
});


