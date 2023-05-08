import React from "react";
import { render, screen } from "@testing-library/react";

import { Loader } from "../";

describe("<Loader /> test", () => {
  it("should render properly", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
