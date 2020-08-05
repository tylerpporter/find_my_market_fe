import React from "react";
import { render, waitFor, fireEvent } from "react-native-testing-library";
import Header from "./Header";
import { getMarketsNearby } from "../../apiCalls";
import { act } from "react-test-renderer";

jest.mock("../../apiCalls");

describe("Header", () => {
  test("renders a header upon load", async () => {
    const { getByTestId } = render(<Header />);

    const title = getByTestId("bannerLogo");
    const filterBtn = await waitFor(() => getByTestId("filterBtn"));

    expect(title).toBeTruthy();
    expect(filterBtn).toBeTruthy();
  });

  test("renders a SearchNav upon load", () => {
    const { getByText } = render(<Header />);

    const city = getByText("City");
    const state = getByText("State");

    expect(city).toBeTruthy();
    expect(state).toBeTruthy();
  });

  test("a modal appears upon clicking the filter button", () => {
    const mockModalVisible = jest.fn();

    const { getByTestId, getByText } = render(
      <Header setModalVisible={mockModalVisible} />
    );

    const filterBtn = getByTestId("filterBtn");

    act(() => {
      fireEvent.press(filterBtn);
    });

    const modalHeader = getByText("Filter By Products");

    expect(modalHeader).toBeTruthy();
  });

  test("when a user clicks the submit filter button, the appropriate fetch call is made", async () => {
    const mockModalVisible = jest.fn();
    const mockSetFilteredProducts = jest.fn();

    const { getByTestId, getByText } = render(
      <Header
        setModalVisible={mockModalVisible}
        setFilteredProducts={mockSetFilteredProducts}
      />
    );

    const filterBtn = getByTestId("filterBtn");

    act(() => {
      fireEvent.press(filterBtn);
    });

    const submitBtn = getByText("Submit Filter");

    expect(submitBtn).toBeTruthy();

    act(() => {
      fireEvent.press(submitBtn);
    });

    expect(await waitFor(() => getMarketsNearby)).toBeCalled();
  });

  test("when a user clicks the clear current filters button, the appropriate fetch call is made", async () => {
    const mockModalVisible = jest.fn();
    const mockSetFilteredProducts = jest.fn();
    const mockSetProducts = jest.fn();

    const { getByTestId, getByText } = render(
      <Header
        setModalVisible={mockModalVisible}
        setFilteredProducts={mockSetFilteredProducts}
      />
    );

    const filterBtn = getByTestId("filterBtn");

    act(() => {
      fireEvent.press(filterBtn);
    });

    const clearfiltersBtn = getByText("Clear Current Filters");

    expect(clearfiltersBtn).toBeTruthy();

    act(() => {
      fireEvent.press(clearfiltersBtn);
    });

    expect(await waitFor(() => getMarketsNearby)).toBeCalled();
  });
});
