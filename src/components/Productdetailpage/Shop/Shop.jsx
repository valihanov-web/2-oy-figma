import React, { useState } from 'react'; // 1. useState import qilindi
import './Shop.css';

// 2. Rasmlar importi (assets papkasidan)
import imgFront from '../../../assets/img51.png';
import imgBack from '../../../assets/img51.png';
import imgModel from '../../../assets/img52.png';
import imgMain from '../../../assets/img51.png';

// 3. Mahsulot ma'lumotlari alohida to'g'ri obyektga olindi
const productData = {
  title: "ONE LIFE GRAPHIC T-SHIRT",
  rating: 4.5,
  price: 260,
  originalPrice: 300,
  discount: "-40%",
  description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: [
    { id: 'olive', hex: '#4A4E3D' },
    { id: 'teal', hex: '#2D5A53' },
    { id: 'navy', hex: '#242A42' }
  ],
  sizes: ["Small", "Medium", "Large", "X-Large"],
  thumbnails: [
    { id: 1, src: imgFront, alt: "Front View" },
    { id: 2, src: imgBack, alt: "Back View" },
    { id: 3, src: imgModel, alt: "Model View" }
  ]
};

// 4. Komponent nomi Shop qilib bitta qilindi
const Shop = () => {
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(imgMain);
  const [activeThumb, setActiveThumb] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleThumbClick = (thumb) => {
    setActiveThumb(thumb.id);
    setMainImage(thumb.src);
  };

  return (
    <div className="product-container">
      <div className="product-wrapper">
        
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span> <span className="separator">&gt;</span>
          <span>Shop</span> <span className="separator">&gt;</span>
          <span>Men</span> <span className="separator">&gt;</span>
          <span className="current">T-shirts</span>
        </div>

        {/* Main Content Grid */}
        <div className="product-grid">
          
          {/* Thumbnails */}
          <div className="thumbnail-list">
            {productData.thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                onClick={() => handleThumbClick(thumb)}
                className={`thumbnail-item ${activeThumb === thumb.id ? 'active' : ''}`}
              >
                <img 
                  src={thumb.src} 
                  alt={thumb.alt} 
                  className="thumbnail-img" 
                />
              </div>
            ))}
          </div>

          {/* Main Image View */}
          <div className="main-image-box">
            <img 
              src={mainImage} 
              alt={productData.title} 
              className="main-product-img" 
            />
          </div>

          {/* Product Details */}
          <div className="details-box">
            <div>
              <h1 className="product-title">{productData.title}</h1>

              {/* Rating */}
              <div className="rating-row">
                <span className="stars">★★★★</span>
                <span className="star-empty">★</span>
                <span className="rating-value">{productData.rating}/5</span>
              </div>

              {/* Price */}
              <div className="price-row">
                <span className="current-price">${productData.price}</span>
                <span className="old-price">${productData.originalPrice}</span>
                <span className="discount-tag">{productData.discount}</span>
              </div>

              <p className="description">{productData.description}</p>

              {/* Colors */}
              <div className="section-block separator-line">
                <h3 className="section-title">Select Colors</h3>
                <div className="color-options">
                  {productData.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`color-btn ${selectedColor === color.id ? 'selected' : ''}`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.id && "✓"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="section-block">
                <h3 className="section-title">Choose Size</h3>
                <div className="size-options">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="action-row">
              <div className="counter-box">
                <button onClick={handleDecrease} className="counter-btn">−</button>
                <span className="counter-value">{quantity}</span>
                <button onClick={handleIncrease} className="counter-btn">+</button>
              </div>

              <button 
                onClick={() => alert(`Savatga qo'shildi: ${quantity} ta`)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop; // 5. Faqat bitta default eksport qoldi
