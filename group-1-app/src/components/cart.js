import { useState, useEffect } from "react";


function Cart() {
  const [food, setFood] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/food")
      .then((response) => response.json())
      .then((data) => setFood(data));
  }, []);

  function remove(index) {
    alert("Item removed!");
    setCartItems(cartItems.filter((_, i) => i !== index));
  }

  function added(item) {
    alert("Item added!");
    setCartItems([...cartItems, item]);
  }
let Price=0


  return (
    <>
      {food.map((food) => {

  Price= food.price;

  return (
    <div className="Container" key={food.id}>
      <div className="Card-body">
        <img src={food.image} alt={food.food} />
        <h5 className="card-title">{food.food}</h5>
        <h5 className="card-title">{food.price}</h5>
        <button
          onClick={() => added({ item: food.food, price: food.price })}
          className="btn"
          style={{ backgroundColor: "lightblue" }}
        >
          Add To Cart
        </button>
       
      </div>
    </div>
  )
})}



      {cartItems.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <th>{Price}</th>
                <td>
                  <button  style={{backgroundColor:"red"}} onClick={() => remove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Cart