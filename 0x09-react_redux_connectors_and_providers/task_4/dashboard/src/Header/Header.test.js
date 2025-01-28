import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("testing Header suite", () => {
  it("renders a div with the class App-header", () => {
    render(<Header />);
    const wrapper = screen.getByTestId("header");
    expect(wrapper).toBeInTheDocument();
  });
});
