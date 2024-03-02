import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load text component", () => {
  render(<Contact />);

  const text = screen.getByText("Contact Info");

  expect(text).toBeInTheDocument();
});

test("Should load heading", () => {
  render(<Contact />);

  const h = screen.getByRole("heading", { level: 1 });

  expect(h).toBeInTheDocument();
});

test("Should load two input boxes",()=>{
    render(<Contact/>);

    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
})