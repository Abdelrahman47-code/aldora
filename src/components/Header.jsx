import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';
import logo from '../assets/logo-aldora.png';

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
                    <button className="icon-btn" onClick={() => alert('خاصية البحث ستتوفر قريباً!')} aria-label="Search">
                        🔍
                    </button>
                    <Link to="/cart" className="icon cart-icon">
                        🛒
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <button className="icon-btn" onClick={() => alert('تسجيل الدخول سيتوفر قريباً!')} aria-label="User Profile">
                        👤
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
