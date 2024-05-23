import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// beforeAll(() => {
//   console.log("Before All");
// });

// beforeEach(() => {
//   console.log("Before Each");
// });

// afterAll(() => {
//   console.log("After All");
// });

// afterEach(() => {
//   console.log("After Each");
// });

test("should render body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
});

test("should Search res Card component with click on Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //test ids can be given by { data-testid="card" } inside div to capture it here
  const cardsBeforeSearch = screen.getAllByTestId("cards");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("resNameToSearch");

  // here target one is same as what we did in React part "e.target.value"
  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("cards");
  expect(cardsAfterSearch.length).toBe(2);

  expect(searchBtn).toBeInTheDocument();
});

test("should filter top rated restauarants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("cards");
  expect(cardsBeforeFilter.length).toBe(9);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(filterBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);
  const cardsAfterFilter = screen.getAllByTestId("cards");
  expect(cardsAfterFilter.length).toBe(9);
});
