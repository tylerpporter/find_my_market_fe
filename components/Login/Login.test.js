import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { act } from "react-test-renderer";
import Login from "./Login";

describe("Login Page", () => {
  test("renders a login page upon load", async () => {
    const { getByText, getByTestId } = render(<Login />);

    const email = await waitFor(() => getByText("Email:"));
    const button = await waitFor(() => getByText("Log in"));
    const logo = await waitFor(() => getByTestId("logo"));

    expect(email).toBeTruthy();
    expect(button).toBeTruthy();
    expect(logo).toBeTruthy();
  });

  test("user can fill out the email input", async () => {
    const { getByPlaceholder } = render(<Login />);

    const emailInput = getByPlaceholder("Please enter your email");

    act(() => {
      fireEvent.changeText(emailInput, "michelle@gmail.com");
    });

    expect(await waitFor(() => emailInput.props.value)).toEqual("michelle@gmail.com");
  });
});
