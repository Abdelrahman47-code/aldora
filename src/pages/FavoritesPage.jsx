import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const FavoritesPage = () => {
    const { favorites } = useFavorites();

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
                    <ProductCard key={product.id} product={product} showRemoveIcon={true} />
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
        width: '100%', // Ensure full width
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        width: '100%', // Ensure grid takes full width
    },
};

export default FavoritesPage;
