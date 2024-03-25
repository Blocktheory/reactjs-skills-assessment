import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login'
import ProductPage from './Components/ProductPage/ProductPage';
function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <ProductPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login />} />
          <Route path="/home" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
