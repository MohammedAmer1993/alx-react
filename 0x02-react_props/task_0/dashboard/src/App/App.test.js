import App from "./App.js";
import { render, screen } from "@testing-library/react";

describe("testing app component", () => {
  it("testing app is exist", () => {
    render(<App />);
    const wrapper = screen.getByTestId("app");
    expect(wrapper).toBeInTheDocument();
  });
});
