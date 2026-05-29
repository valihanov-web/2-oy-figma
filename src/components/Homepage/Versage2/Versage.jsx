import React from 'react';
import './Versage.css';

const BrandsBar = () => {
  const brands = [
    { name: 'VERSACE', className: 'versace' },
    { name: 'ZARA', className: 'zara' },
    { name: 'GUCCI', className: 'gucci' },
    { name: 'PRADA', className: 'prada' },
    { name: 'Calvin Klein', className: 'calvin-klein' }
  ];

  return (
    <div className="brands-container">
      {brands.map((brand, index) => (
        <span key={index} className={`brand ${brand.className}`}>
          {brand.name}
        </span>
      ))}
    </div>
  );
};

export default BrandsBar;

