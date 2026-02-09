import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <h2>سلة المشتريات فارغة</h2>
                <p>لم تقم بإضافة أي منتجات للسلة بعد.</p>
                <Link to="/" className="continue-button">تسوق الآن</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">سلة المشتريات</h1>

            <div className="cart-grid">
                <div className="items-section">
                    {cart.map(item => (
                        <div key={item.id} className="item-card">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-info">
                                <h3>{item.name}</h3>
                                <p className="item-price">{item.price} ج.م</p>
                            </div>
                            <div className="item-controls">
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="quantity-btn"
                                >-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="quantity-btn"
                                >+</button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="remove-btn"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}
                    <button onClick={clearCart} className="clear-btn">إفراغ السلة</button>
                </div>

                <div className="summary-section">
                    <div className="summary-card">
                        <h2>ملخص الطلب</h2>
                        <div className="summary-row">
                            <span>المجموع الفرعي:</span>
                            <span>{getCartTotal()} ج.م</span>
                        </div>
                        <div className="summary-row">
                            <span>الشحن:</span>
                            <span>يتم حسابه عند الدفع</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>الإجمالي:</span>
                            <span>{getCartTotal()} ج.م</span>
                        </div>
                        <button
                            onClick={() => navigate('/checkout')}
                            className="checkout-btn"
                        >
                            إتمام الطلب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
// Styles removed, using CSS file instead


export default CartPage;
