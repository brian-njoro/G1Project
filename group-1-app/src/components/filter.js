import React, {useState, useEffect} from 'react'

// ... (import statements and other code)

export default function FoodFilter() {
    const [foods, setFoods] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      fetch('https://brian-njoro.github.io/project-API/db.json')
        .then(response => response.json())
        .then(data => setFoods(data))
        .catch(error => console.error('Error fetching food data:', error));
  
      fetch('https://brian-njoro.github.io/project-API/db.json')
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(error => console.error('Error fetching restaurant data:', error));
    }, []);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredFoods = foods.filter((food) =>
      food.food.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div> 
        <input
          type="text"
          placeholder="Search for a food..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div>
          {searchQuery && filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id}>
                <img src={food.image} alt={food.food} className='food-image' />
                <p>{food.food}</p>
                <p>Restaurants:</p>
                <ul>
                  <li>
                    {restaurants.find((restaurant) => restaurant.id === food.restaurant_id)?.name}
                  </li>
                </ul>
              </div>
            ))
          ) : (
            //if none is found matching the search//
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  }
