import React, { useState, useEffect } from 'react';

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
          .then(response => response.json())
          .then(data => setRestaurants(data.restaurants))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
}