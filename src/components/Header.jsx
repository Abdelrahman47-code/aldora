import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import './Header.css';
import logo from '../assets/logo-aldora.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const { favorites } = useFavorites();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
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
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>المراتب</Link>
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>المفروشات</Link>
                    <a href="#footer" className="nav-link" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>

                    {/* Mobile Only Menu Items */}
                    <Link to="/favorites" className="nav-link mobile-only" onClick={() => setIsMenuOpen(false)}>
                        قائمة الرغبات ❤️
                    </Link>
                    <div className="nav-link mobile-only" onClick={() => { setIsMenuOpen(false); alert('تسجيل الدخول سيتوفر قريباً!'); }}>
                        تسجيل الدخول / التسجيل 👤
                    </div>
                </nav>

                <div className="icons">
                    <button className="icon-btn search-icon" onClick={() => alert('خاصية البحث ستتوفر قريباً!')} aria-label="Search">
                        🔍
                    </button>
                    <Link to="/favorites" className="icon favorite-icon desktop-only" style={{ textDecoration: 'none', position: 'relative', marginRight: '15px' }}>
                        ❤️
                        {favorites && favorites.length > 0 && <span className="cart-badge" style={{ backgroundColor: '#D32F2F' }}>{favorites.length}</span>}
                    </Link>
                    <Link to="/cart" className="icon cart-icon">
                        🛒
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <button className="icon-btn desktop-only" onClick={() => alert('تسجيل الدخول سيتوفر قريباً!')} aria-label="User Profile">
                        👤
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
