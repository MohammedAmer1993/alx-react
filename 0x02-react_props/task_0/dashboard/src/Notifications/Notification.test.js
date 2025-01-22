import Notifications from "./Notifications";
import { screen, render } from "@testing-library/react";

describe("testing Notification suite", () => {
  it("testing rendering notification", () => {
    render(<Notifications />);
    const element = screen.getByText("Here is the list of notifications");
    expect(element).toBeInTheDocument();
  });
});
