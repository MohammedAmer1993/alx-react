import App from "./App.js";
import { render, screen } from "@testing-library/react";

describe("testing app component", () => {
  it("testing app is exist", () => {
    render(<App />);
    const wrapper = screen.getByTestId("app");
    const header = screen.getByRole("heading", { level: 1 });
    const img = screen.getByAltText("the logo");

    expect(wrapper).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Header exist", () => {
    render(<App />);
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
  });

  it("Login exist", () => {
    render(<App />);
    const element = screen.getByTestId("login");
    expect(element).toBeInTheDocument();
  });

  it("Footer exist", () => {
    render(<App />);
    const element = screen.getByTestId("footer");
    expect(element).toBeInTheDocument();
  });

  it("course list is not displayed when not loged in", () => {
    render(<App />);
    expect(screen.queryByText(/Available courses/)).toBe(null);
  });

  it("course list is rendered if the isLoggedin prop true", () => {
    render(<App isLoggedIn />);
    expect(screen.getByText(/Available courses/)).toBeInTheDocument();
  });
});
