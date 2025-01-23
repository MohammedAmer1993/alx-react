import NotificationItem from "./NotificationItem";
import { render, screen } from "@testing-library/react";

describe("test suite for notfication item", () => {
  it("testing the component renders", () => {
    render(<NotificationItem />);
  });

  it("testing passing type and value", () => {
    render(<NotificationItem type="default" value="test" />);
    const element = screen.getByText("test");
    expect(element).toBeInTheDocument();
  });

  it("testing passing html set object", () => {
    render(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    const element = document.querySelector("li u");
    expect(element.textContent).toBe("test");
  });
});
