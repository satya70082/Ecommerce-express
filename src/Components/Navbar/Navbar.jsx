import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';

import { ShopContext } from '../../Context/ShopConext';
const Navbar = () =>{
  const[menu,setmenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <Link to='/' style={{textDecoration:'none'}}>
            <p>Shopper</p>
                </Link>
            
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("shop")}}>
                  <Link to='/' style={{textDecoration:'none'}}>
                  SHOP
                </Link>
                {menu==="shop"?<hr/>:<></>}
                </li>

                <li onClick={()=>{setmenu("mens")}}> 
                <Link to='/mens' style={{textDecoration:'none'}}>
                  MENS
                </Link>
                {menu==="mens"?<hr/>:<></>}</li>
               
                <li onClick={()=>{setmenu("womens")}}>
                <Link to='/womens' style={{textDecoration:'none'}}>
                  WOMEN
                </Link>
                {menu==="womens"?<hr/>:<></>}</li>

                <li onClick={()=>{setmenu("kids")}}>
                  <Link to='/kids' style={{textDecoration:'none'}}>
                KID
                </Link>{menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <div className='nav-login-cart'>
                <Link to='/login' >
                <button>Login</button>
                </Link>
                <Link to='/cart' style={{textDecoration:'none'}}>
                <img src={cart_icon} alt='cart' />
                </Link>
                 
                    
                    <div className=' nav-cart-count'>{getTotalCartItems()}</div>

                    </div>
    </div>
  )
}

export default Navbar;
