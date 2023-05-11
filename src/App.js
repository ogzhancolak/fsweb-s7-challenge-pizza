import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Order from "./components/OrderPage/Order";
import Success from "./components/OrderPage/Success";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
};

export default App;
