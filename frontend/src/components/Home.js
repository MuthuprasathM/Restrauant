import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
          <img src="https://th.bing.com/th/id/OIP.NpgFR7hHWLgziDw3kMS2sgHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="header-image" />
          
          <h1 className='me'>MEAT N EAT</h1>

          <nav className="navbar">
            <Link to="#">Home</Link>

            {/* Categories Dropdown */}
            <div className="dropdown">
              <span className="dropdown-title">MENU</span>
              <div className="dropdown-content">
                <Link to="/biriyani">BIRIYANI VARIETY</Link>
                <Link to="/fastfood">MEALS</Link>
                <Link to="/meals">FASTFOOD</Link>
                <Link to="/drinks">DRINKS</Link>
                <Link to="/icecreams">ICE CREAMS</Link> 
              </div>
            </div>

            
            <Link to="/about">About Us</Link>
            
            <Link to="/contact">Contact Us</Link>

            <Link to="/AdminAddProduct">Admin</Link>

            <Link to="/ProductList">cart</Link>

            <Link to="/login">login</Link>
           
            
            
          </nav>
        </header>
      <section>
        <h2>Welcome to M.J RESTAURANT</h2>
        <p>where creativity meets customization! Explore our unique range of personalized products designed to fit your individual style and needs. Whether you're looking for the perfect gift or a special treat for yourself, our custom options are here to make your vision a reality. Dive in and create something extraordinary today!</p>
      </section>

      {/* Other components */}
    </div>
  );
};

export default Home;
