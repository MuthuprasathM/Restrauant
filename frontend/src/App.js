import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Using Routes instead of Route in the main file
import Home from './components/Home';
import Menu from './components/menu';
import Tshirt from './components/biriyani';
import Hats from './components/meals';
import Shoe from './components/fastfood';
import Mugs from './components/drinks';
import Pants from './components/icecreams';
import Signup from './components/signup';
import PopularBrands from './components/popularbrand';
import AboutUs from './components/about';
import ContactUs from './components/contuct';
import Cart from './components/cart';
import AdminAddProduct from './components/AdminAddProduct';
import ProductList from './components/ProductList';
import Login from './components/login';
import { CartProvider } from './context/CartContext';

import './App.css';

function App() {
  return (
    <CartProvider> {/* Wrap the entire application with CartProvider */}
      <Router>
        <div>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/biriyani" element={<Tshirt />} />
            <Route path="/fastfood" element={<Hats />} />
            <Route path="/meals" element={<Shoe />} />
            <Route path="/drinks" element={<Mugs />} />
            <Route path="/icecreams" element={<Pants />} /> {/* Corrected the path */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/popularbrands" element={<PopularBrands />} /> {/* Fixed the naming */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
