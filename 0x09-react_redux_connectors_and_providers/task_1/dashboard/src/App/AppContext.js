import { createContext } from "react";

export const user = {
  user: "",
  password: "",
  isLoggedIn: false,
};

export const AppContext = createContext(user);
