import { getAllByRole, render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

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

describe("Contact Component Test cases", () => {
  test("should load contact us component", () => {
    //render
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should load inputBoxPlaceholderName as name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("should load exactly 2 input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
