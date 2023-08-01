import React, {useState} from 'react'

export default function OrderForm() {
  const [foodType, setFoodType] = useState('')
  const [numberOfPlates, setNumberOfPlates] = useState(1)
  const [sideDish, setSideDish] = useState('')
  const [drink, setDrink] = useState('')

  //function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        foodType,
        numberOfPlates,
        sideDish,
        drink,
    })

    //reset form fields after submitting forms
    setFoodType('')
    setDrink('')
    setNumberOfPlates('')
    setSideDish('')
  }

  return(
    <div>
        <form onSubmit = {handleSubmit} >
            {/*foood type input*/}
           <label>
            Food Type:
            <input 
            type="text"
            value = "foodType"
            onChange = {(e) => setFoodType(e.target.value)}
            required
            />
           </label>

           <br/>

           {/*number of plates input*/}
           <label>
            Number of Plates
            <input
            type = "number"
            value = "numberOfPlates"
            onChange={(e) => setNumberOfPlates(e.target.value)}
            min={1} {/*set minimum number allowed for input as 1*/}
            required
            />
           </label>

           <br/>

           {/*input for side dish*/}
           <label>
            Side Dish:
            <input
            type = "text"
            value = {sideDish}
            onChange={(e) => setSideDish(e.target.value)}
            />
           </label>

           <br/>

           {/* Input for Drink */}
           <label>
            Drink:
            <input
            type = 'text'
            value = {drink}
            onChange={(e) => setDrink(e.target.value)}
            />
           </label>

           {/*submit form button*/}
           <button type = "submit">Submit your order here...</button>

        </form>
    </div>
  )
}