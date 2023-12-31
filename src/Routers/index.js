import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
