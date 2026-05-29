import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/shop?search=${query}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          SHOP.CO
        </Link>

        <nav className="nav">
          <NavLink to="/shop">
            Shop <IoChevronDownOutline className="arrow" />
          </NavLink>

          <NavLink to="/on-sale">On Sale</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/brands">Brands</NavLink>
        </nav>

        {/* SEARCH */}
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="icons">
          <Link to="/cart"><FiShoppingCart /></Link>
          <Link to="/profile"><FaRegUserCircle /></Link>
        </div>

      </div>
    </header>
  );
};

export default Header;