import React, {useState, useEffect} from 'react'

function FoodFilter(){
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/food')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.food.toLowerCase().includes(searchQuery.toLowerCase())
  );
return(
    <div>
    <input
      type="text"
      placeholder="Search for a food..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
    <div>
      {filteredFoods.map((food) => (
        <div key={food.id}>
          <img src={food.image} alt={food.food} />
          <p>{food.food}</p>
          <p>Restaurants:</p>
          <ul>
            {food.restaurant_id.map((restaurantId) => (
              <li key={restaurantId}>
                {foods.find((f) => f.id === restaurantId).name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)
}