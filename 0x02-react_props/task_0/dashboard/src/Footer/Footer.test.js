import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("testing footer suite", () => {
  it("renders a div with the class App-footer", () => {
    render(<Footer />);
    const wrapper = screen.getByTestId("footer");
    expect(wrapper).toBeInTheDocument();
  });
});
