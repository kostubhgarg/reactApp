import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (9)");

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(9);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  const cartIcon = screen.getByText("Cart (1 items)");

  expect(cartIcon).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  const cartIcons = screen.getByText("Cart (2 items)");
  
  expect(cartIcons).toBeInTheDocument();
});
