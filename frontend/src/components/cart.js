import React from 'react';
import { useCart } from '../context/CartContext';  // Import the Cart context
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();  // Access the cart and removeFromCart from context

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);  // Calculate the total price

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      
      {/* If cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {/* Display cart items dynamically */}
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              
              {/* Remove button */}
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary and Checkout */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
