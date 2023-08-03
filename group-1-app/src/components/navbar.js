import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav>
           <ul>
             <li><NavLink to="/restaurants">Restaurants</NavLink></li>
             <li><NavLink to="/cart">View Cart</NavLink></li>
             <li><NavLink to="/filter">Search</NavLink></li>
             <li><NavLink to="/orderform">Order</NavLink></li>
            </ul>
        </nav>
    )
}