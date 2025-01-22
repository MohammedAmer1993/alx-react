import Login from "./Login";
import { screen, render } from "@testing-library/react";

describe("testing Login suite", () => {
  it("renders a div with the class App-body", () => {
    render(<Login />);
    const wrapper = screen.getByText("Login to access the full dashboard");
    expect(wrapper).toBeInTheDocument();
  });
});
