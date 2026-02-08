import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
        // Optional: Replace with a toast notification later
        alert(`تم إضافة ${product.name} إلى السلة`);
    };

    const discountPercentage = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

    return (
        <div style={styles.card}>
            <Link to={`/product/${product.id}`} style={styles.link}>
                <div style={styles.imageContainer}>
                    <img src={product.image} alt={product.name} style={styles.image} />

                    {discountPercentage > 0 && (
                        <div style={styles.discountBadge}>
                            {discountPercentage}%-
                        </div>
                    )}

                    {product.badge && <span style={styles.badge}>{product.badge}</span>}
                    <div style={styles.overlay}>
                        <button style={styles.quickViewButton}>عرض سريع</button>
                    </div>
                </div>
                <div style={styles.info}>
                    <h3 style={styles.name}>{product.name}</h3>
                    <div style={styles.priceContainer}>
                        <span style={styles.price}>{product.price} ج.م</span>
                        {product.oldPrice && <span style={styles.oldPrice}>{product.oldPrice} ج.م</span>}
                    </div>
                    <button style={styles.addButton} onClick={handleAddToCart}>أضف إلى السلة</button>
                </div>
            </Link>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    imageContainer: {
        position: 'relative',
        height: '250px',
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    badge: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#f4b400',
        color: '#000',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        zIndex: 1,
    },
    discountBadge: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: '#1a237e', // Dark blue like image
        color: '#fff',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        zIndex: 2,
    },
    overlay: {
        position: 'absolute',
        bottom: '10px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        opacity: 0,
        transform: 'translateY(10px)',
        transition: 'all 0.3s',
    },
    quickViewButton: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        border: 'none',
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontWeight: '600',
    },
    info: {
        padding: '1rem',
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: '1rem',
        margin: '0 0 0.5rem 0',
        color: '#333',
        lineHeight: '1.4',
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        margin: '0 0 1rem 0',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#f4b400', // Highlight color
    },
    oldPrice: {
        fontSize: '1rem',
        color: '#999',
        textDecoration: 'line-through',
    },
    addButton: {
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        padding: '10px',
        width: '100%',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: 'auto',
    }
};

export default ProductCard;
