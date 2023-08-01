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
        
    </div>
  )
}