import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import OrderForm from './components/OrderForm';
import FoodFilter from './components/filter';
import Cart from './components/cart';
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/Cart" element={<Cart />}>
        
          </Route>
          <Route path="/filter" element={<FoodFilter />}>
          
          </Route>
          <Route path="/orderform" element={<OrderForm />}>
       
          </Route>
        </Routes>
    </div>
  );
}

export default App;
