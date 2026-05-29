import React from 'react';
import './Might.css';

// Assets papkasidan mahsulotlar rasmlarini import qilish
import imgPoloContrast from '../../../assets/img53.png';
import imgGradientTshirt from '../../../assets/img54.png';
import imgPoloTipping from '../../../assets/img55.png';
import imgStripedTshirt from '../../../assets/img56.png';
// Rasmdagi 4 ta mahsulot ma'lumotlari arrayi
const recommendedProducts = [
  {
    id: 1,
    title: "Polo with Contrast Trims",
    image: imgPoloContrast,
    rating: 4.0,
    price: 212,
    originalPrice: 242,
    discount: "-20%"
  },
  {
    id: 2,
    title: "Gradient Graphic T-shirt",
    image: imgGradientTshirt,
    rating: 3.5,
    price: 145,
    originalPrice: null,
    discount: null
  },
  {
    id: 3,
    title: "Polo with Tipping Details",
    image: imgPoloTipping,
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null
  },
  {
    id: 4,
    title: "Black Striped T-shirt",
    image: imgStripedTshirt,
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: "-30%"
  }
];

export default function Might() {
  
  // Yulduzchalarni hisoblash va chizish funksiyasi
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    return (
      <div className="rec-stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i} className="rec-star-filled">★</span>;
          } else if (i === fullStars && hasHalf) {
            // Yarim yulduzcha simulyatsiyasi (vizual ravishda to'liq sariq, lekin rang kuchi biroz pastroq yoki maxsus belgi)
            return <span key={i} className="rec-star-filled rec-star-half">★</span>;
          } else {
            return <span key={i} className="rec-star-empty">★</span>;
          }
        })}
      </div>
    );
  };

  return (
    <div className="recommendations-section">
      <div className="recommendations-wrapper">
        
        {/* Asosiy katta sarlavha */}
        <h2 className="recommendations-title">YOU MIGHT ALSO LIKE</h2>

        {/* Mahsulotlar gridi (4 ta ustun) */}
        <div className="recommendations-grid">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="rec-card">
              
              {/* Mahsulot rasm qutisi */}
              <div className="rec-image-box">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="rec-product-img" 
                />
              </div>

              {/* Mahsulot nomi */}
              <h3 className="rec-product-title">{product.title}</h3>

              {/* Reyting qatori */}
              <div className="rec-rating-row">
                {renderStars(product.rating)}
                <span className="rec-rating-value">{product.rating}/5</span>
              </div>

              {/* Narxlar qatori (Chegirma bor-yo'qligiga qarab tekshiradi) */}
              <div className="rec-price-row">
                <span className="rec-current-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="rec-old-price">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="rec-discount-tag">{product.discount}</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
