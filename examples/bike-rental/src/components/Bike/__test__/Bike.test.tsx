import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Bike } from "../";
import { BikeItem } from "../../../types";

describe("<Bike /> test", () => {
  const props: BikeItem = {
    id: "1",
    name: "name",
    picture: "http:mockimg.png",
    type: "normal",
    redirect: jest.fn(),
  };

  it("should render properly", () => {
    render(<Bike {...props} />);
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText(/normal/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should call to action when click on it", () => {
    render(<Bike {...props} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    waitFor(() => {
      expect(props.redirect).toBeCalled();
    });
  });
});
