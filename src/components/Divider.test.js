import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Divider from "./Divider";

jest.mock("./util/math", () => ({
  ...jest.requireActual("../util/math")
}));

const setup = () => render(<Divider />);
describe("testing divider component", () => {
  it("renders", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});

describe("testing divider component with evil math", () => {
  it("renders", () => {
    const { container } = setup();
    expect(container).toBeDefined();
  });
});
