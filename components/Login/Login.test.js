import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { Button, Text, TextInput, View } from 'react-native'
import Login from './Login';

describe("Login Page", () => {

    test("renders a login page upon load", async () => {
        const { getByText, getByRole } = render(<Login />);

        const email = await waitFor(() => getByText("Email:"))
        const button = await waitFor(() => getByText("Log in"))
        // const logo = await waitFor(() => getByRole("image"))

        expect(email).toBeTruthy();
        expect(button).toBeTruthy();
        // expect(logo).toBeTruthy();
    })
})