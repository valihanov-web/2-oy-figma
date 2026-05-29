import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Rahmat! ${email} manzili muvaffaqiyatli obuna qilindi.`);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* 1. Katta Qora Newsletter Bloki */}
        <div className="newsletter-card">
          <h2 className="newsletter-title">
            STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
          </h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-wrapper">
              <span className="mail-icon">✉</span>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        {/* 2. Asosiy Linklar va Ma'lumotlar qismi */}
        <div className="footer-main-links">
          
          {/* Kompaniya haqida qisqacha ma'lumot */}
          <div className="footer-brand-column">
            <h3 className="brand-logo">SHOP.CO</h3>
            <p className="brand-desc">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            {/* Ijtimoiy tarmoqlar dumaloq tugmalari */}
            <div className="social-icons">
              <a href="#" className="social-dot" aria-label="Twitter">🕊</a>
              <a href="#" className="social-dot active-social" aria-label="Facebook">f</a>
              <a href="#" className="social-dot" aria-label="Instagram">📸</a>
              <a href="#" className="social-dot" aria-label="GitHub">🐙</a>
            </div>
          </div>

          {/* Linklar ustunlari */}
          <div className="links-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h4>HELP</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>

        </div>

        {/* 3. Eng pastki mualliflik huquqi va To'lov tizimlari qismi */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          {/* To'lov tizimlari vizual kartalari */}
          <div className="payment-badges">
            <span className="pay-card visa">Visa</span>
            <span className="pay-card mastercard">MasterCard</span>
            <span className="pay-card paypal">PayPal</span>
            <span className="pay-card applepay"> Pay</span>
            <span className="pay-card googlepay">G Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
