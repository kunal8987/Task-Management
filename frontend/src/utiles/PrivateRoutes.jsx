import React, { useContext } from "react";
import { AuthContext } from "../utiles/AuthContextProvider";
import { useNavigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const state = useContext(AuthContext);
  const navigate = useNavigate();
  if (!state.authState.isAuth) {
    return navigate("/sign-in");
  } else {
    return children;
  }
};

export default PrivateRoutes;
