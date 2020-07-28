import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { createStackNavigator } from "@react-navigation/stack";
import App from "./App";
import { act } from "react-test-renderer";
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("App integration tests", () => {
  let Stack;

  beforeEach(() => {
    Stack = createStackNavigator();
  });

  test("renders a login page upon load", async () => {
    const { getByText, getByTestId } = render(<App />);

    const email = await waitFor(() => getByText("Email:"));
    const button = await waitFor(() => getByText("Log in"));
    const logo = await waitFor(() => getByTestId("logo"));

    expect(email).toBeTruthy();
    expect(button).toBeTruthy();
    expect(logo).toBeTruthy();
  });

  test("goes to the home page upon filling out the login page", async () => {
    const { getByText, getByPlaceholder } = render(<App />);

    const emailInput = getByPlaceholder("Please enter your email");
    const button = getByText("Log in");

    act(() => {
      fireEvent.changeText(emailInput, "michelle@gmail.com");
    });

    act(() => {
      fireEvent.press(button);
    });

    const welcomeModalText = await waitFor(() =>
      getByText("Welcome to Find My Market!")
    );
    expect(welcomeModalText).toBeTruthy();
  });
});
