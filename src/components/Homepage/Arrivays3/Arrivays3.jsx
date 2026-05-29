import React from "react";
import "./Arrivays3.css";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import { Link } from "react-router-dom";

const Arrivays3 = () => {
  return (
    <div className="full">
        <div className="new">

        <h1>NEW ARRIVALS</h1>   
        </div>
        <div className="full2">

    <div className="product-card">
      <div className="product-image-box">
        <img src={img4} alt="Skinny Fit Jeans" />
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
        <img src={img3} alt="Skinny Fit Jeans" />
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
        <img src={img5} alt="Skinny Fit Jeans" />
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
        <img src={img6} alt="Skinny Fit Jeans" />
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
        </div>
        <div className="btns">
          <Link to="/new-arrivals">
            <button>View All</button>
          </Link>
        </div>
    </div>
  );
};

export default Arrivays3;