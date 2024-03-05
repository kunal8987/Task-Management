import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AllRoutes;