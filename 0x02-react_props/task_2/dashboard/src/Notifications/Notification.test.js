import Notifications from "./Notifications";
import NotificationItem from "../NotificationItem/NotificationItem";
import { screen, render } from "@testing-library/react";

describe("testing Notification suite", () => {
  it("testing rendering notification", () => {
    render(<Notifications />);
    const element = screen.getByText("Here is the list of notifications");
    expect(element).toBeInTheDocument();
  });

  it("testing it renders the notification component", () => {
    render(<NotificationItem />);
    const element = screen.getByTestId("notificationItem");
    expect(element).toBeInTheDocument();
  });

  it("testing passing html set object", () => {
    render(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    const element = document.querySelector("li u");
    console.log(element);
    expect(element.textContent).toBe("test");
  });
});
