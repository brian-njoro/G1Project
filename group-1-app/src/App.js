import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import OrderForm from './components/OrderForm';
import FoodFilter from './components/filter';
import Cart from './components/cart';
import NavBar from "./components/navbar";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/filter" element={<FoodFilter />} />
        <Route path="/orderform" element={<OrderForm />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </div>
  );
}

export default App;
