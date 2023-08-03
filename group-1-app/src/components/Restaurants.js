import React, { useState, useEffect } from 'react';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://brian-njoro.github.io/project-API/db.json')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.logo} alt={restaurant.name} className="restaurant-logo" />
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <p className="restaurant-contact">{restaurant.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default Restaurants;
