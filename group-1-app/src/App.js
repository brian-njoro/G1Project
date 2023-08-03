import './App.css';
import OrderForm from './components/OrderForm';
import FoodFilter from './components/filter';
import Cart from './components/cart';

function App() {
  return (
    <div>
      <OrderForm/>
    <FoodFilter/>
    <Cart/>
    </div>
  );
}

export default App;
