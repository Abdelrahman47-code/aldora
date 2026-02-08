import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <h2>سلة المشتريات فارغة</h2>
                <p>لم تقم بإضافة أي منتجات للسلة بعد.</p>
                <Link to="/" style={styles.continueButton}>تسوق الآن</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>سلة المشتريات</h1>

            <div className="cart-grid">
                <div style={styles.itemsSection}>
                    {cart.map(item => (
                        <div key={item.id} className="item-card">
                            <img src={item.image} alt={item.name} style={styles.itemImage} />
                            <div style={styles.itemInfo}>
                                <h3>{item.name}</h3>
                                <p style={styles.itemPrice}>{item.price} ج.م</p>
                            </div>
                            <div style={styles.controls}>
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    style={styles.quantityBtn}
                                >-</button>
                                <span style={styles.quantity}>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    style={styles.quantityBtn}
                                >+</button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={styles.removeBtn}
                            >
                                حذف
                            </button>
                        </div>
                    ))}
                    <button onClick={clearCart} style={styles.clearBtn}>إفراغ السلة</button>
                </div>

                <div style={styles.summarySection}>
                    <div style={styles.summaryCard}>
                        <h2>ملخص الطلب</h2>
                        <div style={styles.summaryRow}>
                            <span>المجموع الفرعي:</span>
                            <span>{getCartTotal()} ج.م</span>
                        </div>
                        <div style={styles.summaryRow}>
                            <span>الشحن:</span>
                            <span>يتم حسابه عند الدفع</span>
                        </div>
                        <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
                            <span>الإجمالي:</span>
                            <span>{getCartTotal()} ج.م</span>
                        </div>
                        <button
                            onClick={() => navigate('/checkout')}
                            style={styles.checkoutBtn}
                        >
                            إتمام الطلب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 1rem',
        flex: 1,
    },
    emptyContainer: {
        textAlign: 'center',
        padding: '4rem 1rem',
        flex: 1,
    },
    title: {
        marginBottom: '2rem',
        textAlign: 'center',
    },
    continueButton: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '10px 20px',
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
    },
    itemsSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    itemImage: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    itemInfo: {
        flex: 1,
    },
    itemPrice: {
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#f5f5f5',
        padding: '5px',
        borderRadius: '4px',
    },
    quantityBtn: {
        width: '25px',
        height: '25px',
        border: 'none',
        backgroundColor: '#fff',
        cursor: 'pointer',
        borderRadius: '4px',
        fontWeight: 'bold',
    },
    quantity: {
        minWidth: '20px',
        textAlign: 'center',
    },
    removeBtn: {
        color: 'red',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
    },
    clearBtn: {
        alignSelf: 'flex-start',
        background: 'none',
        border: '1px solid #ccc',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '1rem',
    },
    summarySection: {
        position: 'sticky',
        top: '100px',
        height: 'fit-content',
    },
    summaryCard: {
        backgroundColor: '#f9f9f9',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid #eee',
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    totalRow: {
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #ddd',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    checkoutBtn: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#f4b400',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '1rem',
    },
};

export default CartPage;
