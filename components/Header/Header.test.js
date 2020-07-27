import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import { Button, Text, TextInput, View } from 'react-native'
import Header from './Header';

describe("Header", () => {

    test("renders a header upon load", () => {
        const { getByText } = render(<Header />);

        const title = getByText("Find My Market")

        expect(title).toBeTruthy();
    })
})