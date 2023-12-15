import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Order from './component/Order';
import OrderInfo from './component/OrderInfo';
import Products from './component/Products';

function App() {
  return (
    <div className="App" style={{maxWidth:'100%',margin:'auto'}}>
   <NavBar/>
   <Order/>
   <OrderInfo/>
   <Products/>
    </div>
  );
}

export default App;
