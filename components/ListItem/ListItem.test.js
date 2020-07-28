import React from "react";
import { render } from "react-native-testing-library";
import ListItem from "./ListItem";

describe("ListItem", () => {
  test("renders the list of products to filter from", () => {
    const { getByText } = render(
      <ListItem
        item={{
          id: 1,
          title: "organic",
          isFiltered: false,
        }}
      />
    );

    const product1 = getByText("organic");

    expect(product1).toBeTruthy();
  });

  test("renders a switch for the list item", () => {
    const { getByTestId } = render(
      <ListItem
        item={{
          id: 1,
          title: "organic",
          isFiltered: false,
        }}
      />
    );

    const switch1 = getByTestId("switch");

    expect(switch1).toBeTruthy();
  });
});
