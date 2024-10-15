import React from 'react';

const biriyani = () => {
  const products = [
    { name: 'CHIKEN BIRIYANI',price: '₹ 200', image: 'https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg' },
    { name: 'MUTTUON BIRIYANI', price: '₹ 300', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/MuttonBiryani.webp' },
    { name: 'FISH BIRIYANI', price: '₹ 200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09ffWH1o8jfjWjX57lp84WVYbnH_4F1Br4g&s' },
    { name: 'PRAWN BIRIYANI',  price: '₹ 200', image: 'https://inredberry.com/wp-content/uploads/2023/10/Prawn-Biryani.png' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>BIRIYANI</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Buttons Container */}
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

export default biriyani;
