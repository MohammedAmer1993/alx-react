import Notifications from "./Notifications";
import { screen, render } from "@testing-library/react";

describe("testing Notification suite", () => {
  it("testing rendering notification", () => {
    render(<Notifications displayDrawer />);
    const element = screen.getByText(/Your notifications/);
    expect(element).toBeInTheDocument();
  });

  it("testing it renders the notification component", () => {
    render(<Notifications displayDrawer />);
    const element = screen.getByText(/Your notifications/);
    expect(element).toBeInTheDocument();
  });
});
