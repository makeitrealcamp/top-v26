import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BikeList } from "../";
import { BikeItem } from "../../../types";

describe("<BikeList /> test", () => {
  const props: Array<BikeItem> = [
    {
      id: "1",
      name: "name",
      picture: "http:mockimg.png",
      type: "normal",
      redirect: jest.fn(),
    },
    {
      id: "1",
      name: "name",
      picture: "http:mockimg.png",
      type: "normal",
      redirect: jest.fn(),
    },
  ];

  it("should render properly", () => {
    render(<BikeList list={props} />, { wrapper: BrowserRouter });
    expect(screen.getAllByText('name').length).toEqual(2)
    expect(screen.getAllByText(/normal/i).length).toEqual(2)
    expect(screen.getAllByRole("button").length).toEqual(2)
    expect(screen.getAllByRole("img").length).toEqual(2)
  });
});
