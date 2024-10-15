import React from 'react';

const icecreams= () => {
  const products = [
    { name: 'VENNILA',  price: '₹ 100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqTJSxl-UIKtoWcJfcKIqz5BOfQspDwsuTw&s' },
    { name: 'CHOCOLATE',  price: '₹ 150', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2014/11/1-36.jpg' },
    { name: 'STRAWBERRY',  price: '₹ 70', image: 'https://www.thespruceeats.com/thmb/kpuMkqk0BhGMTuSENf_IebbHu1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-ice-cream-10-0b3e120e7d6f4df1be3c57c17699eb2c.jpg' },
    
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
    // Implement cart functionality here
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
    // Implement buy functionality here
  };

  return (
    <div className="category-page">
      <h2>ICE CREAMS</h2>
      
      
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

export default icecreams;
