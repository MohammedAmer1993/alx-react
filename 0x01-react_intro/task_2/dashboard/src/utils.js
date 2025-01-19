export function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export function getFooterCopy(isIndex) {
  return isIndex ? "ALX" : "ALX main dashboard";
}
