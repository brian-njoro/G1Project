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
}