import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Arrange
  render(<App />);

  // Act
  const text = screen.getByText(/home/i);

  // Assert
  expect(text).toBeInTheDocument();
});
