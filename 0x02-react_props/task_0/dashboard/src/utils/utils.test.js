import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js";

test("testing get full year", () => {
  const year = new Date().getFullYear();
  expect(getFullYear()).toBe(year);
});

test("getting footer copy", () => {
  expect(getFooterCopy(true)).toBe("ALX");
  expect(getFooterCopy(false)).toBe("ALX main dashboard");
});

test("testing notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
