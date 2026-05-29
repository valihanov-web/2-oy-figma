import React from "react";
import { NavLink, Link } from "react-router-dom"; // Link va NavLink import qilindi
import "./Header.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logotip bosilganda Bosh sahifaga o'tadi */}
        <Link to="/" className="logo">
          SHOP.CO
        </Link>

        {/* Sahifaga o'tuvchi va active klassini oluvchi menyu */}
        <nav className="nav">
          <NavLink to="/shop">Shop
            <IoChevronDownOutline className="arrow" />
          </NavLink>

          <NavLink to="/on-sale">On Sale</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/brands">Brands</NavLink>
        </nav>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
          />
        </div>

        {/* Ikonkalar bosilganda tegishli sahifaga o'tadi */}
        <div className="icons">
          <Link to="/cart"><FiShoppingCart /></Link>
          <Link to="/profile"><FaRegUserCircle /></Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
