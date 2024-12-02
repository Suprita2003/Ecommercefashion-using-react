
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="Men" />}/>
        <Route path='/womens' element={<ShopCategory  category="Women"/>}/>
        <Route path='/kids' element={<ShopCategory  category="Kids"/>}/>
        <Route path='/product' element={<Product/>} >
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
