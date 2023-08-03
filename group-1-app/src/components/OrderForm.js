import React, { useState } from 'react';

export default function OrderForm() {
  const [foodType, setFoodType] = useState('');
  const [numberOfPlates, setNumberOfPlates] = useState(1);
  const [sideDish, setSideDish] = useState('');
  const [drink, setDrink] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      foodType,
      numberOfPlates,
      sideDish,
      drink,
    });

    // Reset form fields after submitting forms
    setFoodType('');
    setDrink('');
    setNumberOfPlates(1);
    setSideDish('');
  };

  return (
    <div className='foodOrders'>
      <form onSubmit={handleSubmit}>
        {/* Food type input */}
        <label>
          Food Type:
          <input 
            type="text"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
          />
        </label>

        <br />

        {/* Number of plates input */}
        <label>
          Number of Plates:
          <input
            type="number"
            value={numberOfPlates}
            onChange={(e) => setNumberOfPlates(parseInt(e.target.value))}
            min={1}
            required
          />
        </label>

        <br />

        {/* Input for side dish */}
        <label>
          Side Dish:
          <input
            type="text"
            value={sideDish}
            onChange={(e) => setSideDish(e.target.value)}
          />
        </label>

        <br />

        {/* Input for Drink */}
        <label>
          Drink:
          <input
            type='text'
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
          />
        </label>

        {/* Submit form button */}
        <button type="submit">Submit your order here...</button>
      </form>
    </div>
  );
}
