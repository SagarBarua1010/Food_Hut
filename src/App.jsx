import React, { useState } from 'react';
import Navber from './Components/NavBer/Navber';
import {Routes} from'react-router-dom'
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin,setShowLogin] = useState(false) 
  return (
<>
{showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}

<div className='app'>
      
      <Navber setShowLogin={setShowLogin}></Navber>
      
     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
     </Routes>
    </div>
    <Footer></Footer>
</>
  );
};

export default App;