import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { useData } from ".";

describe("useData test", () => {
  const params = {
    initialState: [],
    fn: jest.fn(),
  };
  const MockComponent = () => {
    useData(params.initialState, params.fn);
    return <h1>Mock component</h1>;
  };

  it("should works properly with a function parameter", async () => {
    render(<MockComponent />);
    await waitFor(() => {
      // eslint-disable-next-line no-unreachable
      expect(params.fn).toHaveBeenCalled();
    });

    /*
    const setStateMock = jest.fn();
    const useStateMock = (initialState) => [initialState, setStateMock];
    const spy = jest.spyOn(React, "useState").mockImplementation(useStateMock);
    // Other example of spy
    const spy = jest,spyOn(React, "useState").mockImplementation(React.useState([]))
    renderHook(useData(params.initialState, params.fn));*/
  });
});
