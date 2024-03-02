import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load login", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>

  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render cart items with 0", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
  
    );
  
    const cartItems = screen.getByText("Cart (0 items)");
  
    expect(cartItems).toBeInTheDocument();
  });
  
  it("Should change to logout button", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
  
    );
  
    const loginButton = screen.getByRole("button");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
  
    expect(logoutButton).toBeInTheDocument();
  });
  