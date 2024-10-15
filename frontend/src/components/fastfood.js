import React from 'react';

const FASTFOOD = () => {
  const products = [
    { name: 'FRIED RICE', price: '₹ 150', image: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg' },
    { name: 'CHIKEN NOODLES', price: '₹ 150', image: 'https://preview.redd.it/ahh-spicy-street-chicken-noodles-what-could-be-a-better-v0-brg9tvj9tc5d1.jpeg?auto=webp&s=0542f0dc7245ea7bc631aebabf743f7377ebe0c9' },
    { name: 'SHAWARMA CHIKEN', price: '₹ 200', image: 'https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg' },
    { name: 'GRILL CHIKEN', price: '₹ 350', image: 'https://sinfullyspicy.com/wp-content/uploads/2023/11/1200-by-1200-images-2.jpg' }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div className="category-page">
      <h2>FASTFOOD IDEMS</h2>
      
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            
            {/* Action Buttons */}
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

export default FASTFOOD;
