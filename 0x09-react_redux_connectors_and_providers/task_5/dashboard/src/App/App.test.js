import App from "./App.js";
import { mapStateToProps } from "./App.js";
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

  it("should return the correct object when the state is logged in", () => {
    const state = {
      isUserLoggedIn: true, // Mimicking the Redux state where the user is logged in
    };

    const expectedProps = {
      isLoggedIn: true, // Expected props to be passed to the component
    };

    const result = mapStateToProps(state);

    // Check that the result matches the expected props
    expect(result).toEqual(expectedProps);
  });

  it("should return the correct object when the state is not logged in", () => {
    const state = {
      isUserLoggedIn: false, // Mimicking the Redux state where the user is not logged in
    };

    const expectedProps = {
      isLoggedIn: false, // Expected props to be passed to the component
    };

    const result = mapStateToProps(state);

    // Check that the result matches the expected props
    expect(result).toEqual(expectedProps);
  });
});
