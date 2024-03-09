import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: '',
  });

  let payload = localStorage.getItem("adminToken");
  if (payload) {
    state.isAuth = true;
  } else {
    state.isAuth = false;
  }
  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: payload,
    });
  };

  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: localStorage.clear(),
    });
  };
  return (
    <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
