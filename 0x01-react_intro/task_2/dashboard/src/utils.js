export function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export function getFooterCopy(isIndex) {
  return isIndex ? "ALX" : "ALX main dashboard";
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
