import React from 'react';

const MEALS= () => {
  const products = [
    { name: 'SAMBAR', price: '₹ 50', image: 'https://priyafoods.com/cdn/shop/files/SAMBARRICE_2.jpg?v=1701948559' },
    { name: 'CURD RICE',  price: '₹ 30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1OMTL_NxqnesIEzXosZ9S6nrKUhELm4qug&s' },
    { name: 'TOMATO RICE',  price: '₹ 50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dX_aa-tXL4b8FUWC07vbkFC4r2B_P_XZJQ&s' },
    { name: 'MUSHROOM RICE',price: '₹ 60', image: 'https://www.cookwithkushi.com/wp-content/uploads/2015/09/best_quick_easy_veg_mushroom_biryani.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy now functionality here
  };

  return (
    <div className="category-page">
      <h2>MEALS</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <div className="action-buttons">
              <button onClick={() => handleAddToCart(product.name)} className="add-to-cart-btn">Add to Cart</button>
              <button onClick={() => handleBuyNow(product.name)} className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MEALS;
