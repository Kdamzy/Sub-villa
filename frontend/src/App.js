import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import gadget_banner from './Components/Assets/banner_1.jpg'
import phone_banner from './Components/Assets/banner_3.webp'
import laptop_banner from './Components/Assets/banner_3.webp'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/gadget' element={<ShopCategory banner={gadget_banner} category="gadget"/>}/>
        <Route path='/phones' element={<ShopCategory banner={phone_banner} category="phones"/>}/>
        <Route path='/laptop' element={<ShopCategory banner={laptop_banner} category="laptop"/>}/>
        <Route path='/product' element={<product/>}>
          <Route path=':productId' element={<product/>}>
        </Route>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
