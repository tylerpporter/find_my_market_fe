import React from "react";
import { render, waitFor } from "react-native-testing-library";
import Home from "./Home";

describe("Home Page", () => {
  test("renders a welcome modal upon load", async () => {
    let route =  {
      "key": "Home-qgz4hYnwG2IKoQ2rL5x7v",
      "name": "Home",
      "params": {
        "user": {
          "email": "Whatsup@gmail.com",
          "favorites": [],
          "id": 82,
        },
      },
    }

    const { getByText } = render(<Home route={route} />);

    const welcomeModalText = await waitFor(() => getByText("Welcome to Find My Market!"));
    const getStartedBtn = await waitFor(() => getByText("Let's get started!"));

    expect(welcomeModalText).toBeTruthy();
    expect(getStartedBtn).toBeTruthy();
  });

  test("renders a header component", async () => {
    let route =  {
      "key": "Home-qgz4hYnwG2IKoQ2rL5x7v",
      "name": "Home",
      "params": {
        "user": {
          "email": "Whatsup@gmail.com",
          "favorites": [],
          "id": 82,
        },
      },
    }
    const { getByText, getByTestId } = render(<Home route={route} />);

    const titleLogo = getByTestId("bannerLogo");
    const city = getByText("City");

    expect(titleLogo).toBeTruthy();
    expect(city).toBeTruthy();
  });
});
