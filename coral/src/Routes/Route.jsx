import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<RegistrationForm />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/home" index element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
