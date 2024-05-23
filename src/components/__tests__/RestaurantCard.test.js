import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restauarnt Card components", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const nameOfRestaurant = screen.getByText("UBQ by Barbeque Nation");

  expect(nameOfRestaurant).toBeInTheDocument();
});

// test("should render label on restauarnt Card components", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);

//   const label = screen.getAllByLabelText("Open");

//   expect(label).toBeInTheDocument();
// });
