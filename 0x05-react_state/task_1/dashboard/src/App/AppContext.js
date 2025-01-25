import { createContext } from "react";

export const user = {
  user: "",
  password: "",
  isLoggedIn: false,
};

export function logOut() {
  return { ...user };
}

export const AppContext = createContext({ user: user, logOut: logOut });
