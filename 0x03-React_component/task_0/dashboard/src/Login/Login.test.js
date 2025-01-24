/* eslint-disable testing-library/no-node-access */
import Login from "./Login";
import { screen, render } from "@testing-library/react";

describe("testing Login suite", () => {
  it("renders a div with the class App-body", () => {
    render(<Login />);
    const wrapper = screen.getByText("Login to access the full dashboard");

    expect(wrapper).toBeInTheDocument();
  });

  it("render inputs", () => {
    render(<Login />);
    const inputs = document.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
  });

  it("render labels", () => {
    render(<Login />);
    const labels = document.querySelectorAll("label");
    expect(labels).toHaveLength(2);
  });
});
