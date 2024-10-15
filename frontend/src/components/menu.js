import React from 'react';
import { Link } from 'react-router-dom';

const MENU = () => {
  return (
    <div className="categories-page">
      <h2>Our Product Categories</h2>
      <div className="categories-list">
        <Link to="/products" className="category-item">
          <img src="https://via.placeholder.com/150" alt="BIRIYANI" />
          <h3>BIRIYANI</h3>
        </Link>

        <Link to="fastfood" className="category-item">
          <img src="https://via.placeholder.com/150" alt="fastfood" />
          <h3>FASTFOOD</h3>
        </Link>

        <Link to="drinks" className="category-item">
          <img src="" alt="DRINKS" />
          <h3>DRINKS</h3>
        </Link>

        <Link to="oversize" className="category-item">
          <img src="https://via.placeholder.com/150" alt="OVER SIZED SHIRT" />
          <h3>OVER SIZED SHIRT</h3>
        </Link>

        <Link to="OVER SIZED T-SHIRT" className="category-item">
          <img src="https://via.placeholder.com/150" alt="OVER SIZED T-SHIRT" />
          <h3>OVER SIZED T-SHIRT</h3>
        </Link>
      </div>
    </div>
  );
};

export default MENU;
