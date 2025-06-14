import React, { useState, useContext } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false); // ✅ Mobile menu toggle
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" height="50px" />
        <p>SHOPNOW</p>
      </div>

      <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        ☰
      </div>

      <ul className={`nav-menu ${showMobileMenu ? "active" : ""}`}>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
