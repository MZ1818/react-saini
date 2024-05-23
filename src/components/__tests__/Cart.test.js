import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockSeparateResListData.json";
import RestaurantMenu from "../RestaurantMenu";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render Restaurent Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //should have accordian header name "Momo Burger (6)"
  const accordianHeader = screen.getByText("Momo Burger (6)");
  expect(accordianHeader).toBeInTheDocument();

  //now will click on that , will open list of items of that accordion
  fireEvent.click(accordianHeader);

  //total no. of list Items have to be 6 after opening the accordion
  const listOfItems = screen.getAllByTestId("itemsList");
  expect(listOfItems.length).toBe(6);

  //their should be a button named as "ADD"
  const addButton = screen.getAllByRole("button", { name: "ADD" });

  //clicking the first "ADD button of that list items"
  fireEvent.click(addButton[0]);

  //After clicking on the ADD;;IT should change the number in the cart in header section
  const cartInHeader = screen.getByText("Cart:-(1)");
  expect(cartInHeader).toBeInTheDocument();

  //Now we will open the Cart Component; their also we check no. of items . As both Cart & Restaurant Menu uses same ItemList component,,so the number of items will be the collaboration of both
  const listOfItemsTotallyInCartSection = screen.getAllByTestId("itemsList");
  expect(listOfItemsTotallyInCartSection.length).toBe(7);

  //Getting clear acrt button
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearCartBtn).toBeInTheDocument();

  //after clicking on that button
  fireEvent.click(clearCartBtn);
  const textShows = screen.getByText("Your Cart is Empty 🫤🫤");
  expect(textShows).toBeInTheDocument();
});
