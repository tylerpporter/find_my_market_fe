import React from "react";
import { render, waitFor } from "react-native-testing-library";
import Home from "./Home";

describe("Home Page", () => {
  test("renders a welcome modal upon load", async () => {
    const { getByText } = render(<Home />);

    const welcomeModalText = await waitFor(() => getByText("Welcome to Find My Market!"));
    const getStartedBtn = await waitFor(() => getByText("Let's get started!"));

    expect(welcomeModalText).toBeTruthy();
    expect(getStartedBtn).toBeTruthy();
  });

  test("renders a header component", async () => {
    const { getByText, getByTestId } = render(<Home />);

    const titleLogo = getByTestId("bannerLogo");
    const city = getByText("City");

    expect(titleLogo).toBeTruthy();
    expect(city).toBeTruthy();
  });
});
