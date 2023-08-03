import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav>
             <NavLink to="/cart">View Cart</NavLink>
             <NavLink to="/filter">Search</NavLink>
             <NavLink to="/orderform">Order</NavLink>
        </nav>
    )
}