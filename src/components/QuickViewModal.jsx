import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const QuickViewModal = ({ product, onClose }) => {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = React.useState(false);

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeBtn} onClick={onClose}>&times;</button>
                <div style={styles.content}>
                    <div style={styles.imageContainer}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                    </div>
                    <div style={styles.details}>
                        <h2 style={styles.name}>{product.name}</h2>
                        <div style={styles.priceContainer}>
                            <span style={styles.price}>{product.price} ج.م</span>
                            {product.oldPrice && <span style={styles.oldPrice}>{product.oldPrice} ج.م</span>}
                        </div>
                        <p style={styles.description}>
                            مرتبة عالية الجودة توفر الراحة والدعم المثالي لنوم هادئ.
                        </p>
                        <div style={styles.actions}>
                            <button
                                style={{
                                    ...styles.addToCartBtn,
                                    backgroundColor: isAdded ? '#4CAF50' : '#000'
                                }}
                                onClick={handleAddToCart}
                            >
                                {isAdded ? 'تمت الإضافة ✓' : 'أضف إلى السلة'}
                            </button>
                            <Link to={`/product/${product.id}`} style={styles.detailsLink} onClick={onClose}>
                                عرض التفاصيل الكاملة
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
    },
    closeBtn: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        color: '#333',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginTop: '1rem',
    },
    imageContainer: {
        width: '100%',
        height: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#1a1a1a',
    },
    priceContainer: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        marginBottom: '1.5rem',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    oldPrice: {
        fontSize: '1.1rem',
        color: '#999',
        textDecoration: 'line-through',
    },
    description: {
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '2rem',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    addToCartBtn: {
        padding: '12px',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    detailsLink: {
        textAlign: 'center',
        color: '#1a1a1a',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    // Mobile responsive for modal content
    '@media (max-width: 768px)': {
        content: {
            gridTemplateColumns: '1fr',
        },
        imageContainer: {
            height: '200px',
        },
    }
};

export default QuickViewModal;
