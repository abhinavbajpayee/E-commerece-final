import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from'../Assets/cart_cross_icon.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt=""/>
          <P>SHOPPER</P>
        </div>
        <ul className="nav-menu">
          <li>SHOP</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
        </ul>
        <div className="nav-login-cart">
          <button></button>
        </div>
    </div>
  )
}
