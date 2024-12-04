import React, { useContext, useState } from 'react';
import './Navber.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navber = ({setShowLogin}) => {
    const[menu,setMenu] =useState("menu");
    const {getTotalCartAmount}=useContext(StoreContext);
    return (
        <div className='navber'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className='navber-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
            </ul>
            <div className="navber-right">
                <img src={assets.search_icon} alt="" />
                <div className="navber-search-icom">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navber;