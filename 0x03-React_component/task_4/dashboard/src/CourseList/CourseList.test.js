import CourseList from "./CourseList";
import { render, screen } from "@testing-library/react";

describe("testing suite for course list table", () => {
  it("testing course list render without crash", () => {
    render(<CourseList />);
  });

  it("testing rendering 5 rows", () => {
    render(<CourseList />);
    expect(screen.getByText(/Available courses/)).toBeInTheDocument();
    expect(screen.getByText(/Course name/)).toBeInTheDocument();
    expect(screen.getByText(/ES6/)).toBeInTheDocument();
    expect(screen.getByText(/Webpack/)).toBeInTheDocument();
    expect(screen.getByText(/React/)).toBeInTheDocument();
  });
});
