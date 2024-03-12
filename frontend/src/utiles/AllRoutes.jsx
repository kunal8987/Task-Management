import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Task from "../pages/task/Task";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          path="/task"
          element={
            <PrivateRoutes>
              <Task />
            </PrivateRoutes>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
