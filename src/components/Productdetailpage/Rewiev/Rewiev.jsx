import React, { useState } from 'react';
import './Rewievs.css';

// Rasmdagi sharhlar ma'lumotlar bazasi (Mock Data)
const initialReviews = [
  {
    id: 1,
    stars: 5,
    name: "Samantha D.",
    verified: true,
    comment: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    date: "Posted on August 14, 2023"
  },
  {
    id: 2,
    stars: 5,
    name: "Alex M.",
    verified: true,
    comment: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    date: "Posted on August 15, 2023"
  },
  {
    id: 3,
    stars: 4,
    name: "Ethan R.",
    verified: true,
    comment: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    date: "Posted on August 16, 2023"
  },
  {
    id: 4,
    stars: 4,
    name: "Olivia P.",
    verified: true,
    comment: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    date: "Posted on August 17, 2023"
  },
  {
    id: 5,
    stars: 5,
    name: "Liam K.",
    verified: true,
    comment: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    date: "Posted on August 18, 2023"
  },
  {
    id: 6,
    stars: 5,
    name: "Ava H.",
    verified: true,
    comment: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    date: "Posted on August 19, 2023"
  }
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('rating');
  const [sortBy, setSortBy] = useState('latest');
  const [reviews, setReviews] = useState(initialReviews);

  // Yulduzchalarni render qilish funksiyasi
  const renderStars = (count) => {
    return (
      <div className="review-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < count ? "star-filled" : "star-empty"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        
        {/* 1. Yuqori Tab Navigatsiyasi */}
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'rating' ? 'active' : ''}`}
            onClick={() => setActiveTab('rating')}
          >
            Rating & Reviews
          </button>
          <button 
            className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </div>

        {/* 2. Sub-Header (Sarlavha, Filtr va Tugmalar) */}
        <div className="reviews-sub-header">
          <h2 className="reviews-title">
            All Reviews <span className="reviews-count">({reviews.length})</span>
          </h2>
          
          <div className="reviews-actions">
            {/* Filtr belgisi tugmasi */}
            <button className="filter-icon-btn" aria-label="Filter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Saralash Select-box */}
            <div className="select-wrapper">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
              </select>
            </div>

            {/* Sharh yozish tugmasi */}
            <button 
              className="write-review-btn"
              onClick={() => alert("Sharh yozish oynasi ochildi")}
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* 3. Sharhlar kartochkalari gridi */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              
              {/* Kartochka tepasi: Yulduzchalar va Uchta nuqta */}
              <div className="card-top-row">
                {renderStars(review.stars)}
                <button className="more-options-btn" aria-label="Options">•••</button>
              </div>

              {/* Ism va Tasdiqlanganlik belgisi (Checkmark) */}
              <div className="reviewer-name-row">
                <span className="reviewer-name">{review.name}</span>
                {review.verified && (
                  <span className="verified-badge" title="Verified Purchase">
                    ✓
                  </span>
                )}
              </div>

              {/* Sharh matni */}
              <p className="review-text">{review.comment}</p>

              {/* Sana */}
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>

        {/* 4. Ko'proq yuklash tugmasi */}
        <div className="load-more-wrapper">
          <button 
            className="load-more-btn"
            onClick={() => alert("Ko'proq sharhlar yuklanmoqda...")}
          >
            Load More Reviews
          </button>
        </div>

      </div>
    </div>
  );
}
