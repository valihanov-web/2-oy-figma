import React, { useState, useEffect } from "react";
import "./Category.css";

// 1. Assets papkasidan barcha rasmlarni import qilish
import imgGradient from "../../../assets/img53.png";
import imgPoloTipping from "../../../assets/img55.png";
import imgStriped from "../../../assets/img56.png";
import imgJeans from "../../../assets/img57.png";
import imgCheckered from "../../../assets/img58.png";
import imgSleeveStriped from "../../../assets/img59.png";
import imgVertical from "../../../assets/img60.png";
import imgCourage from "../../../assets/img61.png";
import imgBermuda from "../../../assets/img62.png";

// 2. Mahsulotlar obyektiga import qilingan o'zgaruvchilarni biriktirish
const initialProducts = [
  {
    id: 1,
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: 145,
    originalPrice: null,
    discount: null,
    img: imgGradient,
    category: "T-shirts",
    style: "Casual",
    colors: ["green", "white"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 2,
    title: "Polo with Tipping Details",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null,
    img: imgPoloTipping,
    category: "Shirts",
    style: "Formal",
    colors: ["red", "white"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 3,
    title: "Black Striped T-shirt",
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    img: imgStriped,
    category: "T-shirts",
    style: "Casual",
    colors: ["black"],
    sizes: ["Medium", "Large"],
  },
  {
    id: 4,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    img: imgJeans,
    category: "Jeans",
    style: "Casual",
    colors: ["blue"],
    sizes: ["Medium", "Large", "X-Large"],
  },
  {
    id: 5,
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    originalPrice: null,
    discount: null,
    img: imgCheckered,
    category: "Shirts",
    style: "Party",
    colors: ["yellow", "white"],
    sizes: ["Small", "Large"],
  },
  {
    id: 6,
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    img: imgSleeveStriped,
    category: "T-shirts",
    style: "Gym",
    colors: ["green"],
    sizes: ["Small", "Medium"],
  },
  {
    id: 7,
    title: "Vertical Striped Shirt",
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    img: imgVertical,
    category: "Shirts",
    style: "Casual",
    colors: ["purple"],
    sizes: ["Large", "X-Large"],
  },
  {
    id: 8,
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    price: 145,
    originalPrice: null,
    discount: null,
    img: imgCourage,
    category: "T-shirts",
    style: "Party",
    colors: ["orange", "pink"],
    sizes: ["Medium", "Large"],
  },
  {
    id: 9,
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: 80,
    originalPrice: null,
    discount: null,
    img: imgBermuda,
    category: "Shorts",
    style: "Casual",
    colors: ["cyan"],
    sizes: ["Small", "Medium"],
  },
];

const colorsList = [
  { id: "green", hex: "#00C12B" },
  { id: "red", hex: "#F51111" },
  { id: "yellow", hex: "#F5DD11" },
  { id: "orange", hex: "#F57911" },
  { id: "cyan", hex: "#11F5F5" },
  { id: "blue", hex: "#113AF5" },
  { id: "purple", hex: "#7E11F5" },
  { id: "pink", hex: "#F511D6" },
  { id: "white", hex: "#FFFFFF" },
  { id: "black", hex: "#000000" },
];

const sizesList = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];
const pageSize = 6;

export default function Category() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    category: "",
    style: "",
    minPrice: 50,
    maxPrice: 200,
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="cat-stars">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < fullStars ? "cat-star-filled" : "cat-star-empty"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const toggleColor = (color) => {
    setSelectedColor((prev) => (prev === color ? "" : color));
  };

  const toggleCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };

  const toggleStyle = (style) => {
    setSelectedStyle((prev) => (prev === style ? "" : style));
  };

  const handlePriceChange = (index, value) => {
    const numberValue = Number(value);
    setPriceRange((prev) => {
      const next = [...prev];
      next[index] = Number.isNaN(numberValue) ? prev[index] : numberValue;
      if (index === 0 && next[0] > next[1]) next[0] = next[1];
      if (index === 1 && next[1] < next[0]) next[1] = next[0];
      return next;
    });
  };

  const handleApplyFilters = () => {
    setFilters({
      color: selectedColor,
      size: selectedSize,
      category: selectedCategory,
      style: selectedStyle,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
    setCurrentPage(1);
  };

  const filteredProducts = initialProducts.filter((product) => {
    if (filters.color && !product.colors.includes(filters.color)) return false;
    if (filters.size && !product.sizes.includes(filters.size)) return false;
    if (filters.category && product.category !== filters.category) return false;
    if (filters.style && product.style !== filters.style) return false;
    if (product.price < filters.minPrice || product.price > filters.maxPrice)
      return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Low Price") return a.price - b.price;
    if (sortBy === "High Price") return b.price - a.price;
    return b.rating - a.rating;
  });

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProducts = sortedProducts.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  );
  const showFrom =
    sortedProducts.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const showTo = Math.min(sortedProducts.length, safePage * pageSize);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="category-page">
      <div className="category-wrapper">
        <div className="cat-breadcrumb">
          <span>Home</span> <span className="cat-sep">&gt;</span>{" "}
          <span className="cat-current">Casual</span>
        </div>

        <div className="category-layout">
          <aside className="filter-panel">
            <div className="filter-header">
              <h3>Filters</h3>
              <span className="filter-icon">⚡</span>
            </div>

            <div className="filter-section-list border-b">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className={`filter-row ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => toggleCategory(cat)}
                >
                  <span>{cat}</span> <span className="arrow-right">&gt;</span>
                </div>
              ))}
            </div>

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
                  <span>${priceRange[0]}</span> <span>${priceRange[1]}</span>
                </div>
              </div>
              <div className="price-range-inputs">
                <input
                  type="number"
                  value={priceRange[0]}
                  min="0"
                  max={priceRange[1]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                />
                <span>—</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  min={priceRange[0]}
                  max="1000"
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                />
              </div>
            </div>

            <div className="filter-section-list border-b">
              <div className="filter-section-title">
                <h4>Colors</h4> <span className="toggle-arrow">^</span>
              </div>
              <div className="colors-grid">
                {colorsList.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => toggleColor(color.id)}
                    className={`color-circle ${selectedColor === color.id ? "active" : ""} ${color.id === "white" ? "white-border" : ""}`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.id ? "✓" : ""}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section-list border-b">
              <div className="filter-section-title">
                <h4>Size</h4> <span className="toggle-arrow">^</span>
              </div>
              <div className="sizes-wrap">
                {sizesList.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-tag-btn ${selectedSize === size ? "active" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section-list">
              <div className="filter-section-title">
                <h4>Dress Style</h4> <span className="toggle-arrow">^</span>
              </div>
              {dressStyles.map((style) => (
                <div
                  key={style}
                  className={`filter-row ${selectedStyle === style ? "active" : ""}`}
                  onClick={() => toggleStyle(style)}
                >
                  <span>{style}</span> <span className="arrow-right">&gt;</span>
                </div>
              ))}
            </div>

            <button className="apply-filter-btn" onClick={handleApplyFilters}>
              Apply Filter
            </button>
          </aside>

          <main className="catalog-content">
            <div className="catalog-header">
              <h2>Casual</h2>
              <div className="catalog-meta">
                <span className="products-count-text">
                  Showing {showFrom}-{showTo} of {sortedProducts.length}{" "}
                  Products
                </span>
                <div className="sort-box">
                  <span className="sort-label">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="cat-sort-select"
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Low Price">Price: Low to High</option>
                    <option value="High Price">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="catalog-grid">
              {paginatedProducts.length === 0 ? (
                <div className="no-products">
                  No products match your filters.
                </div>
              ) : (
                paginatedProducts.map((product) => (
                  <div key={product.id} className="catalog-card">
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
                      {product.originalPrice && (
                        <span className="cat-old-price">
                          ${product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <span className="cat-disc-tag">{product.discount}</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="cat-pagination">
              <button
                className="pag-nav-btn"
                disabled={safePage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              >
                ← Previous
              </button>
              <div className="pag-pages">
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    className={`pag-num ${page === safePage ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className="pag-nav-btn"
                disabled={safePage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
              >
                Next →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
