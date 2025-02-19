import App from "./App.js";
import { render, screen } from "@testing-library/react";

describe("testing app component", () => {
  it("testing app is exist", () => {
    render(<App />);
    const wrapper = screen.getByTestId("app");
    const header = screen.getByRole("heading", { level: 1 });
    const img = screen.getByRole("img");

    expect(wrapper).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("Notification exist", () => {
    render(<App />);
    const element = screen.getByText("Notification");
    expect(element).toBeInTheDocument();
  });
  it("Header exist", () => {
    render(<App />);
    const element = screen.getByText("Header");
    expect(element).toBeInTheDocument();
  });

  it("Login exist", () => {
    render(<App />);
    const element = screen.getByText("Login");
    expect(element).toBeInTheDocument();
  });

  it("Footer exist", () => {
    render(<App />);
    const element = screen.getByText("Footer");
    expect(element).toBeInTheDocument();
  });
});
