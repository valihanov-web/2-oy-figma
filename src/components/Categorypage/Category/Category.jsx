import React, { useState } from 'react';
import './Category.css';

// 1. Assets papkasidan barcha rasmlarni import qilish
import imgGradient from '../../../assets/img53.png';
import imgPoloTipping from '../../../assets/img55.png';
import imgStriped from '../../../assets/img56.png';
import imgJeans from '../../../assets/img57.png';
import imgCheckered from '../../../assets/img58.png';
import imgSleeveStriped from '../../../assets/img59.png';
import imgVertical from '../../../assets/img60.png';
import imgCourage from '../../../assets/img61.png';
import imgBermuda from '../../../assets/img62.png';


// 2. Mahsulotlar obyektiga import qilingan o'zgaruvchilarni biriktirish
const initialProducts = [
  { id: 1, title: "Gradient Graphic T-shirt", rating: 3.5, price: 145, originalPrice: null, discount: null, img: imgGradient },
  { id: 2, title: "Polo with Tipping Details", rating: 4.5, price: 180, originalPrice: null, discount: null, img: imgPoloTipping },
  { id: 3, title: "Black Striped T-shirt", rating: 5.0, price: 120, originalPrice: 150, discount: "-30%", img: imgStriped },
  { id: 4, title: "Skinny Fit Jeans", rating: 3.5, price: 240, originalPrice: 260, discount: "-20%", img: imgJeans },
  { id: 5, title: "Checkered Shirt", rating: 4.5, price: 180, originalPrice: null, discount: null, img: imgCheckered },
  { id: 6, title: "Sleeve Striped T-shirt", rating: 4.5, price: 130, originalPrice: 160, discount: "-30%", img: imgSleeveStriped },
  { id: 7, title: "Vertical Striped Shirt", rating: 5.0, price: 212, originalPrice: 232, discount: "-20%", img: imgVertical },
  { id: 8, title: "Courage Graphic T-shirt", rating: 4.0, price: 145, originalPrice: null, discount: null, img: imgCourage },
  { id: 9, title: "Loose Fit Bermuda Shorts", rating: 3.0, price: 80, originalPrice: null, discount: null, img: imgBermuda }
];

const colorsList = [
  { id: 'green', hex: '#00C12B' }, { id: 'red', hex: '#F51111' }, { id: 'yellow', hex: '#F5DD11' },
  { id: 'orange', hex: '#F57911' }, { id: 'cyan', hex: '#11F5F5' }, { id: 'blue', hex: '#113AF5' },
  { id: 'purple', hex: '#7E11F5' }, { id: 'pink', hex: '#F511D6' }, { id: 'white', hex: '#FFFFFF' },
  { id: 'black', hex: '#000000' }
];

const sizesList = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

export default function Category() {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Most Popular');

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="cat-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < fullStars ? "cat-star-filled" : "cat-star-empty"}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="category-page">
      <div className="category-wrapper">
        
        {/* Breadcrumb */}
        <div className="cat-breadcrumb">
          <span>Home</span> <span className="cat-sep">&gt;</span> <span className="cat-current">Casual</span>
        </div>

        <div className="category-layout">
          
          {/* LEFT SIDE: FILTER PANEL */}
          <aside className="filter-panel">
            <div className="filter-header">
              <h3>Filters</h3>
              <span className="filter-icon">⚡</span>
            </div>

            {/* Categories List */}
            <div className="filter-section-list border-b">
              {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(cat => (
                <div key={cat} className="filter-row">
                  <span>{cat}</span> <span className="arrow-right">&gt;</span>
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="filter-section-list border-b">
              <div className="filter-section-title">
                <h4>Price</h4> <span className="toggle-arrow">^</span>
              </div>
              <div className="price-slider-mock">
                <div className="slider-line">
                  <div className="slider-filled"></div>
                  <div className="slider-thumb left"></div>
                  <div className="slider-thumb right"></div>
                </div>
                <div className="price-labels">
                  <span>$50</span> <span>$200</span>
                </div>
              </div>
            </div>

            {/* Colors Filter */}
            <div className="filter-section-list border-b">
              <div className="filter-section-title">
                <h4>Colors</h4> <span className="toggle-arrow">^</span>
              </div>
              <div className="colors-grid">
                {colorsList.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`color-circle ${selectedColor === color.id ? 'active' : ''} ${color.id === 'white' ? 'white-border' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.id && '✓'}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="filter-section-list border-b">
              <div className="filter-section-title">
                <h4>Size</h4> <span className="toggle-arrow">^</span>
              </div>
              <div className="sizes-wrap">
                {sizesList.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-tag-btn ${selectedSize === size ? 'active' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style Filter */}
            <div className="filter-section-list">
              <div className="filter-section-title">
                <h4>Dress Style</h4> <span className="toggle-arrow">^</span>
              </div>
              {["Casual", "Formal", "Party", "Gym"].map(style => (
                <div key={style} className="filter-row">
                  <span>{style}</span> <span className="arrow-right">&gt;</span>
                </div>
              ))}
            </div>

            <button className="apply-filter-btn" onClick={() => alert("Filtrlar qo'llanildi")}>
              Apply Filter
            </button>
          </aside>

          {/* RIGHT SIDE: PRODUCTS CATALOG */}
          <main className="catalog-content">
            <div className="catalog-header">
              <h2>Casual</h2>
              <div className="catalog-meta">
                <span className="products-count-text">Showing 1-9 of 100 Products</span>
                <div className="sort-box">
                  <span className="sort-label">Sort by:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="cat-sort-select">
                    <option value="Most Popular">Most Popular</option>
                    <option value="Low Price">Price: Low to High</option>
                    <option value="High Price">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="catalog-grid">
              {initialProducts.map(product => (
                <div key={product.id} className="catalog-card">
                  {/* 3. Dinamik rasm tegi joylashtirildi */}
                  <div className="cat-img-box">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="cat-product-img" 
                    />
                  </div>
                  <h3 className="cat-prod-title">{product.title}</h3>
                  <div className="cat-rating-row">
                    {renderStars(product.rating)}
                    <span className="cat-rating-val">{product.rating}/5</span>
                  </div>
                  <div className="cat-price-row">
                    <span className="cat-curr-price">${product.price}</span>
                    {product.originalPrice && <span className="cat-old-price">${product.originalPrice}</span>}
                    {product.discount && <span className="cat-disc-tag">{product.discount}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="cat-pagination">
              <button className="pag-nav-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
                ← Previous
              </button>
              <div className="pag-pages">
                <button className="pag-num active">1</button>
                <button className="pag-num">2</button>
                <button className="pag-num">3</button>
                <span className="pag-dots">...</span>
                <button className="pag-num">8</button>
                <button className="pag-num">9</button>
                <button className="pag-num">10</button>
              </div>
              <button className="pag-nav-btn" onClick={() => setCurrentPage(p => p + 1)}>
                Next →
              </button>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
