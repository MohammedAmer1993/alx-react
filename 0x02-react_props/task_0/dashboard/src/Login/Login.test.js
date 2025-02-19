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
    const inputs = screen.getAllByRole("input");
    expect(inputs.length).toBe(2);
  });

  it("render labels", () => {
    render(<Login />);
    const labels = screen.getAllByRole("label");
    expect(labels.length).toBe(2);
  });
});
