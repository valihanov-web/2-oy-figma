import React, { useState } from 'react';
import { FaStar, FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  // Rasm dagi va qo'shimcha test ma'lumotlar
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      verified: true,
      stars: 5,
      comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      id: 2,
      name: "Alex K.",
      verified: true,
      stars: 5,
      comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      id: 3,
      name: "James L.",
      verified: true,
      stars: 5,
      comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
      id: 4,
      name: "Mooen  .",
      verified: true,
      stars: 5,
      comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];

  // Slider uchun index holati
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bir marta bosganda nechta karta ko'rinishi (ekran o'lchamiga qarab o'zgaradi)
  const cardsToShow = 3; 

  const nextSlide = () => {
    if (currentIndex < reviews.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
        <div className="slider-controls">
          <button 
            className={`control-btn ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button 
            className={`control-btn ${currentIndex >= reviews.length - cardsToShow ? 'disabled' : ''}`} 
            onClick={nextSlide}
            disabled={currentIndex >= reviews.length - cardsToShow}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="slider-container">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="stars-container">
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <div className="user-name">
                <h3>{review.name}</h3>
                {review.verified && <FaCheckCircle className="verified-icon" />}
              </div>
              <p className="review-text">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
