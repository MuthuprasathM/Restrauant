import React from 'react';

const Mugs = () => {
  const products = [
    { name: 'apple juice', price: '$100', image: 'https://5.imimg.com/data5/YB/FP/MY-24215181/apple-juice-500x500.jpg' },
    { name: 'orange juice',  price: '$80', image: 'https://5.imimg.com/data5/EV/BD/MY-28707171/orange-blossom-juice-500x500.png' },
    { name: 'lemon juice',  price: '$50', image: 'https://img1.exportersindia.com/product_images/bc-full/2018/10/5433492/lemon-juice-1540585615-4413862.jpeg' },
    
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
      <h2>DRINKS</h2>
      
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>

            {/* Buttons */}
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

export default Mugs;
