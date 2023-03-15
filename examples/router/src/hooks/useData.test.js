import React from "react";
import { screen, render, waitFor, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useData } from "./";

const FakeComponent = () => {
  const params = {
    initialState: [],
    fn: jest.fn(),
  };
  useData(params.initialState, params.fn);
  return <h1>faje</h1>;
};

describe("useData hook tests", () => {
  it("should response properly", async () => {
    const params = {
      initialState: [],
      fn: jest.fn(),
    };

    render(<FakeComponent />);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(params.fn).toHaveBeenCalled();
    });
  });

  /**
    it("should response properly", () => {
    const params = {
      initialState: [],
      fn: jest.fn(),
    };

    /*const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    jest.spyOn(React, "useState").mockImplementationOnce(React.useState([]));

    renderHook(useData(params.initialState, params.fn));
    screen.debug();
   */
});
