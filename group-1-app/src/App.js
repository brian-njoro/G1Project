import './App.css'
import OrderForm from './components/OrderForm'
import FoodFilter from './components/filter'

function App() {
  return (
    <div className="foodOrders">
      <FoodFilter />
     <OrderForm />
    </div>
  );
}

export default App;
