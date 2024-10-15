// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';  // Use the cart context

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart } = useCart();  // Destructure the cart-related functions

  // Fetch products from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const takeOrder = (product) => {
    // Logic for adding product to cart
    addToCart(product);
    console.log(`Order taken for: ${product.name}`);  // Use backticks for string interpolation
    alert('Taking Order successfully!');
  };

  const cancelOrder = (product) => {
    // Logic for removing product from cart
    removeFromCart(product);
    console.log(`Order canceled for: ${product.name}`);  // Use backticks for string interpolation
    alert('Order canceled successfully!');
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => takeOrder(product)}>Take order</button>
            <button onClick={() => cancelOrder(product)}>Cancel order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
