import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Webshop from './Pages/Webshop';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Webshopcontext, { Shopcontext } from './Context/Webshopcontext';
import Checkout from './Pages/Checkout';




function App() {



  return (
    <div>
      <Webshopcontext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/webshop' element={<Webshop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
         
        </Routes>
      </BrowserRouter>
      </Webshopcontext>
    </div>
  );
}

export default App;
