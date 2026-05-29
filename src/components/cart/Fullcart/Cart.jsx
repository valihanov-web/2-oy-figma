import React, { useState } from 'react';
import './Cart.css';

// Assets papkasidan kiyim rasmlarini import qilish
import imgGradient from '../../../assets/img53.png';
import imgCheckered from '../../../assets/img58.png';
import imgJeans from '../../../assets/img57.png';



export default function Cart() {
  // Savatchadagi mahsulotlar holati (State)
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145, quantity: 1, img: imgGradient },
    { id: 2, title: "Checkered Shirt", size: "Medium", color: "Red", price: 180, quantity: 1, img: imgCheckered },
    { id: 3, title: "Skinny Fit Jeans", size: "Large", color: "Blue", price: 240, quantity: 1, img: imgJeans }
  ]);

  const [promoCode, setPromoCode] = useState('');

  // Miqdorni oshirish funksiyasi
  const handleIncrease = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Miqdorni kamaytirish funksiyasi
  const handleDecrease = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Mahsulotni savatdan o'chirish funksiyasi
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Hisob-kitob qismi (Matematik amallar)
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal > 0 ? Math.round(subtotal * 0.2) : 0; // Fixed -20% chegirma simulyatsiyasi
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        
        {/* Breadcrumb */}
        <div className="cart-breadcrumb">
          <span>Home</span> <span className="cart-sep">&gt;</span> <span className="cart-current">Cart</span>
        </div>

        {/* Katta sarlavha */}
        <h1 className="cart-main-title">YOUR CART</h1>

        <div className="cart-layout">
          
          {/* CHAP TARAFI: MAHSULOTLAR RO'YXATI */}
          <div className="cart-items-list">
            {cartItems.length === 0 ? (
              <div className="empty-cart-message">Savatchangiz bo'sh.</div>
            ) : (
              cartItems.map((item, index) => (
                <div key={item.id} className={`cart-item-card ${index === cartItems.length - 1 ? 'no-border' : ''}`}>
                  
                  {/* Rasm qutisi */}
                  <div className="item-img-box">
                    <img src={item.img} alt={item.title} className="item-product-img" />
                  </div>

                  {/* Detallar qismi */}
                  <div className="item-details">
                    <div className="item-header-row">
                      <h3 className="item-title">{item.title}</h3>
                      {/* O'chirish (Musor) tugmasi */}
                      <button className="remove-item-btn" onClick={() => handleRemove(item.id)} aria-label="Remove item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3333" strokeWidth="2">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                        </svg>
                      </button>
                    </div>

                    <p className="item-spec">Size: <span>{item.size}</span></p>
                    <p className="item-spec">Color: <span>{item.color}</span></p>

                    <div className="item-footer-row">
                      <span className="item-price">${item.price}</span>
                      
                      {/* Miqdor hisoblagichi (+ / -) */}
                      <div className="cart-counter">
                        <button onClick={() => handleDecrease(item.id)} className="cart-counter-btn">−</button>
                        <span className="cart-counter-val">{item.quantity}</span>
                        <button onClick={() => handleIncrease(item.id)} className="cart-counter-btn">+</button>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* O'NG TARAFI: CHEKOUT VA HISOB-KITOB PANELI */}
          <div className="order-summary-panel">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">${subtotal}</span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Discount (-20%)</span>
              <span className="summary-value discount-red">-${discount}</span>
            </div>

            <div className="summary-row border-b-summary">
              <span className="summary-label">Delivery Fee</span>
              <span className="summary-value">${deliveryFee}</span>
            </div>

            <div className="summary-row total-row">
              <span className="total-label">Total</span>
              <span className="total-value">${total}</span>
            </div>

            {/* Promo kod qismi */}
            <div className="promo-code-row">
              <div className="promo-input-wrapper">
                <span className="promo-icon">🏷️</span>
                <input 
                  type="text" 
                  placeholder="Add promo code" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-input"
                />
              </div>
              <button className="promo-apply-btn" onClick={() => alert("Promo kod tekshirilmoqda...")}>
                Apply
              </button>
            </div>

            {/* Checkout-ga o'tish tugmasi */}
            <button className="checkout-submit-btn" onClick={() => alert("To'lov sahifasiga yo'naltirilmoqda...")}>
              Go to Checkout <span className="arrow-next">→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
