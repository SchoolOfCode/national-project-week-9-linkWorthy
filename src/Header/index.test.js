import { render, screen } from "@testing-library/react";
import Header from "../Header/index.js";
import React from "react";

test("renders GET STARTED link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/GET STARTED/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check if welcome words exist in Header", () => {
  expect(Header()).toMatchObject(
    /a home for all your school of code bookmarks/
  );
});
