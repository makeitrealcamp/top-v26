import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlertDialog } from "../";
import { AlertDialogProps } from "../../../types";

describe("<AlertDialog /> test", () => {
  const props: AlertDialogProps = {
    open: true,
    setOpen: jest.fn(),
    title: "title",
    content: "content",
    handleAgree: jest.fn(),
  };

  it("should render properly", () => {
    render(<AlertDialog {...props} />);
    expect(screen.getByText("title")).toBeDefined();
    expect(screen.getByText("content")).toBeDefined();
  });

  it("should hide the alert dialog when click on Disagree", () => {
    render(<AlertDialog {...props} />);
    const button = screen.getByText("Disagree");
    userEvent.click(button);
    waitFor(() => {
      expect(props.setOpen).toBeCalled();
    });
  });

  it("should accept when click on Agree", () => {
    render(<AlertDialog {...props} />);
    const button = screen.getByText("Agree");
    userEvent.click(button);
    waitFor(() => {
      expect(props.handleAgree).toBeCalled();
    });
  });
});
