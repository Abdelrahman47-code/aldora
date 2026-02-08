import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    const { favorites, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();

    if (favorites.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <h2>قائمة المفضلة فارغة</h2>
                <Link to="/" style={styles.shopLink}>تصفح المنتجات</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>المفضلة</h1>
            <div style={styles.grid}>
                {favorites.map(product => (
                    <div key={product.id} style={styles.card}>
                        <div style={styles.imageContainer}>
                            <img src={product.image} alt={product.name} style={styles.image} />
                            <button
                                onClick={() => removeFromFavorites(product.id)}
                                style={styles.removeBtn}
                                title="إزالة من المفضلة"
                            >
                                &times;
                            </button>
                        </div>
                        <div style={styles.info}>
                            <h3 style={styles.name}>{product.name}</h3>
                            <div style={styles.priceContainer}>
                                <span style={styles.price}>{product.price} ج.م</span>
                                {product.oldPrice && <span style={styles.oldPrice}>{product.oldPrice} ج.م</span>}
                            </div>
                            <div style={styles.actions}>
                                <button
                                    onClick={() => addToCart(product)}
                                    style={styles.addToCartBtn}
                                >
                                    أضف إلى السلة
                                </button>
                                <Link to={`/product/${product.id}`} style={styles.viewBtn}>
                                    عرض التفاصيل
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        minHeight: '60vh',
    },
    emptyContainer: {
        textAlign: 'center',
        padding: '4rem',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
    },
    shopLink: {
        display: 'inline-block',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '4px',
        textDecoration: 'none',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        border: '1px solid #eee',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        transition: 'transform 0.3s',
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
    removeBtn: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D32F2F',
    },
    info: {
        padding: '1rem',
    },
    name: {
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: '#333',
    },
    priceContainer: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    price: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    oldPrice: {
        fontSize: '0.9rem',
        color: '#999',
        textDecoration: 'line-through',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    addToCartBtn: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    viewBtn: {
        display: 'block',
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #1a1a1a',
        color: '#1a1a1a',
        borderRadius: '4px',
        textDecoration: 'none',
    },
};

export default FavoritesPage;
