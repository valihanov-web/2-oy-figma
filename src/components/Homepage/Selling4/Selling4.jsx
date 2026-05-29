import React from 'react'
import "./Selling4.css";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
import { Link } from 'react-router-dom';
const Selling4 = () => {
  return (
    <div className="full">
        <div className="new">

        <h1>NEW ARRIVALS</h1>   
        </div>
        <div className="full2">

    <div className="product-card">
      <div className="product-image-box">
        <img src={img7} alt="Skinny Fit Jeans" />
      </div>

      <h3 className="product-title">
        Skinny Fit Jeans
      </h3>

      <div className="rating-row">
        <div className="stars">★★★★</div>

        <span className="rating">3.5/5</span>
      </div>

      <div className="price-row">
        <span className="current-price">$240</span>

        <span className="old-price">$260</span>
        <span className="discount">-20%</span>

      </div>
    </div>

      <div className="product-card">
      <div className="product-image-box">
        <img src={img8} alt="Skinny Fit Jeans" />
      </div>

      <h3 className="product-title">
        Skinny Fit Jeans
      </h3>

      <div className="rating-row">
        <div className="stars">★★★★</div>

        <span className="rating">3.5/5</span>
      </div>

      <div className="price-row">
        <span className="current-price">$240</span>

        <span className="old-price">$260</span>

      </div>
    </div>

      <div className="product-card">
      <div className="product-image-box">
        <img src={img9} alt="Skinny Fit Jeans" />
      </div>

      <h3 className="product-title">
        Skinny Fit Jeans
      </h3>

      <div className="rating-row">
        <div className="stars">★★★★</div>

        <span className="rating">3.5/5</span>
      </div>

      <div className="price-row">
        <span className="current-price">$240</span>

        <span className="old-price">$260</span>

      </div>
    </div>

      <div className="product-card">
      <div className="product-image-box">
        <img src={img10} alt="Skinny Fit Jeans" />
      </div>

      <h3 className="product-title">
        Skinny Fit Jeans
      </h3>

      <div className="rating-row">
        <div className="stars">★★★★</div>

        <span className="rating">3.5/5</span>
      </div>

      <div className="price-row">
        <span className="current-price">$240</span>

        <span className="old-price">$260</span>

      </div>
    </div>
        </div>
        <div className="btns">
        <Link to="/new-arrivals">
            <button>View All</button>
    </Link>
        </div>
    </div>
  )
}

export default Selling4
