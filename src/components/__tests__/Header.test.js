import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render login button inside header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

test("should include Cart:- text inside header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cartText = screen.getByText(/Cart:-/);

  expect(cartText).toBeInTheDocument();
});

test("should change login to logout on clicking the button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "logout" });

  expect(logoutButton).toBeInTheDocument();
});
