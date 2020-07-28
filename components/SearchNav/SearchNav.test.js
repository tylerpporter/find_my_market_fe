import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import SearchNav from "./SearchNav";
import { searchNavOnSubmit } from "../../apiCalls";
import { act } from "react-test-renderer";

jest.mock("../../apiCalls");

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

  test("user can fill out the city and state input", async () => {
    const { getByPlaceholder } = render(<SearchNav />);

    const cityInput = getByPlaceholder("Enter a city");
    const stateInput = getByPlaceholder("Enter a state");

    act(() => {
      fireEvent.changeText(cityInput, "Dallas");
      fireEvent.changeText(stateInput, "Texas");
    });

    expect(await waitFor(() => cityInput.props.value)).toEqual("Dallas");
    expect(await waitFor(() => stateInput.props.value)).toEqual("Texas");
  });

  test("user can fill out the form in the SearchNav to search for a new city and state", async () => {
    const { getByText, getByPlaceholder } = render(<SearchNav />);

    const cityInput = getByPlaceholder("Enter a city");
    const stateInput = getByPlaceholder("Enter a state");
    const submit = getByText("Submit");

    act(() => {
      fireEvent.changeText(cityInput, "Dallas");
      fireEvent.changeText(stateInput, "Texas");
    });

    act(() => {
      fireEvent.press(submit);
    });

    expect(await waitFor(() => searchNavOnSubmit)).toBeCalled();
  });
});
