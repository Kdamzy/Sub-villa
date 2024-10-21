import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/data' element={<ShopCategory category="data"/>}/>
        <Route path='/gadget' element={<ShopCategory category="gadget"/>}/>
        <Route path='/phones' element={<ShopCategory category="phones"/>}/>
        <Route path='/consultancy' element={<ShopCategory category="consultancy"/>}/>
        <Route path='/product' element={<product/>}>
          <Route path=':productId' element={<product/>}>
        </Route>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
