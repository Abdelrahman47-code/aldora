import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';
import logo from '../assets/logo.png'; // Assuming user will place image here

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="top-bar">
                <span>خصومات هائلة لفترة محدودة!</span>
            </div>
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="ALDORA" className="logo-img" />
                </Link>

                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
                    <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>المراتب</a>
                    <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>المفروشات</a>
                    <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>
                </nav>

                <div className="icons">
                    <span className="icon">🔍</span>
                    <Link to="/cart" className="icon cart-icon">
                        🛒
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <span className="icon">👤</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
