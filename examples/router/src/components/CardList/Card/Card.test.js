import { screen, render, fireEvent } from "@testing-library/react";
import { Card } from "./";

describe("<Card/> tests", () => {
  const props = {
    name: "fake name",
    image: "http://fake-image.png",
    id: 1,
    handleClick: jest.fn(),
  };

  it("should render properly", () => {
    render(<Card {...props} />);

    const image = screen.getByAltText("fake name");
    const h2 = screen.getByText("fake name");

    expect(h2).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it.only("should redirect when click on item", () => {
    render(<Card {...props} />);
    const card = screen.getByTestId("card");
    fireEvent.click(card);
    expect(props.handleClick).toHaveBeenCalled();
  });
});
