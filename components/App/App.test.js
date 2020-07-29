import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { createStackNavigator } from "@react-navigation/stack";
import App from "./App";
import { act } from "react-test-renderer";
import { sub } from "react-native-reanimated";
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("App integration tests", () => {
  let Stack;

  beforeEach(() => {
    Stack = createStackNavigator();
  });

  test("renders a login page upon load", async () => {
    const { getByTestId } = render(<App />);

    const register = await waitFor(() => getByTestId("registerBtn"));
    const signIn = await waitFor(() => getByTestId("signInBtn"));
    const logo = await waitFor(() => getByTestId("logo"));

    expect(register).toBeTruthy();
    expect(signIn).toBeTruthy();
    expect(logo).toBeTruthy();
  });

  test("goes to the home page upon filling out the login page", async () => {
    const { getByTestId, getByText } = render(<App />);

    const register = await waitFor(() => getByTestId("registerBtn"));

    act(() => {
      fireEvent.press(register);
    });

    const email = await waitFor(() => getByTestId("registerEmail"));
    const password = await waitFor(() => getByTestId("registerPassword"));
    const submit = await waitFor(() => getByTestId("registerSubmit"));

    act(() => {
      fireEvent.changeText(email, "tyler@gmail.com");
      fireEvent.changeText(password, "1234");
    });

    act(() => {
      fireEvent.press(submit);
    });

    const welcomeModalText = await waitFor(() =>
      getByText("Welcome to Find My Market!")
    );
    expect(welcomeModalText).toBeTruthy();
  });
})
