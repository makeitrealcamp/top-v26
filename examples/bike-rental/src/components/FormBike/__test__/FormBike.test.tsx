import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormBike } from "../";
import { FormBikeProps } from "../../../types";

describe("<BikeList /> test", () => {
  const props: FormBikeProps = {
    handleSubmit: jest.fn(),
  };

  it("should render properly", () => {
    render(<FormBike {...props} />);
    expect(screen.getByTestId("username")).toBeDefined();
    expect(screen.getByTestId("email")).toBeDefined();
    expect(screen.getByTestId("phone")).toBeDefined();
    expect(screen.getByTestId("dateStart")).toBeDefined();
    expect(screen.getByTestId("dateEnd")).toBeDefined();
  });

  it("should allow submit form", async () => {
    render(<FormBike {...props} />);

    const username = await waitFor(() => screen.findByTestId("username"));
    const email = await waitFor(()=> screen.findByTestId("email"));
    const phone = await waitFor(()=>screen.findByTestId("phone")) ;
    const dateStart = await waitFor(()=>screen.findByTestId("dateStart")) ;
    const dateEnd = await waitFor(()=> screen.findByTestId("dateEnd")) ;
    const button = await waitFor(()=>screen.getByRole("button"))

    userEvent.type(username, "username");
    userEvent.type(email, "email@test.com");
    userEvent.type(phone, "12345");
    userEvent.type(dateStart, "2023-05-05");
    userEvent.type(dateEnd, "2023-10-05");

    waitFor(()=>{
        expect(username).toHaveValue("username")
        expect(email).toHaveValue("email@test.com")
        expect(phone).toHaveValue("12345")
        expect(dateStart).toHaveValue("2023-05-05")
        expect(dateEnd).toHaveValue("2023-10-05")
    });

    userEvent.click(button)

    waitFor(()=> {
        expect(props.handleSubmit).toHaveBeenCalled()
    })
  });
});
