import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationForm />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
